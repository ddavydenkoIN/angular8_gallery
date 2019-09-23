import { ElementRef, Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

import { AgPlaygroundStoreService } from "../store/ag-playground-store.service";
import { AG_GALLERY_IMG_DEFAULT_WIDTH } from "../../../../consts";
import { AgUserInputConfig, AgGalleryStyles } from "../../../../models";
import { AgGalleryListService } from "../../home/modules/gallery-list/services/ag-gallery-list.service";
import { AgGalleryPropsAdapter } from "../components/gallery/services/ag-gallery-props.adapter";
import { AgUserInputToGalleryPropsConverter } from "./ag-user-input-to-gallery-props.converter";
import { AgContainerStyles } from "../../../../models/gallery/gallery.model";
import { AgImgStyles } from "../../../../models/img";

@Injectable()
export class AgPlaygroundService {

  constructor(private agPlaygroundStoreService: AgPlaygroundStoreService,
              private galleryListService: AgGalleryListService) {
  }

  loadAllImages() {
    this.agPlaygroundStoreService.loadAllImages();
  }

  resetPlaygroundState() {
    this.agPlaygroundStoreService.resetPlaygroundState();
  }
  retrieveAllImageUrls(): Observable<string[]> {
    return this.agPlaygroundStoreService.retrieveAllImageUrls();
  }

  retrieveInitialNumberOfImages(): Observable<number> {
    return this.agPlaygroundStoreService.retrieveInitialNumberOfImages();
  }

  calculateLoadCount(el: ElementRef, value: number): number {
    return el && Math.floor(el.nativeElement.clientWidth / (value || AG_GALLERY_IMG_DEFAULT_WIDTH));
  }

  retrieveGalleryConfig(): Observable<AgUserInputConfig> {
    return this.agPlaygroundStoreService.retrieveGalleryConfig();
  }

  retrieveJoinedGalleryConfig(id: string): Observable<AgGalleryStyles> {
  return this.retrieveGalleryConfig()
    .pipe(
      withLatestFrom(
        this.galleryListService.getGalleryProps(id),
        this.agPlaygroundStoreService.retrieveUserInteractionFlag()
      ),
      map(([userInput, galleryConf, userInteractionFlag]: [AgUserInputConfig, AgGalleryStyles, boolean]): AgGalleryStyles => {
        const convertedUserProps =  new AgGalleryPropsAdapter(new AgUserInputToGalleryPropsConverter()).convert(userInput);
        return {
          container: userInteractionFlag
            ? this.mergeContainerProps(galleryConf.container, convertedUserProps.container)
            : this.mergeContainerProps(convertedUserProps.container, galleryConf.container),
          img: userInteractionFlag
            ? this.mergeImgProps(galleryConf.img, convertedUserProps.img)
            : this.mergeImgProps(convertedUserProps.img, galleryConf.img),
        };
      })
    );
  }

  mergeContainerProps(primary: Partial<AgContainerStyles>, secondary: Partial<AgContainerStyles>): Partial<AgContainerStyles> {
    return {...primary, ...secondary};
  }

  mergeImgProps(primary: Partial<AgImgStyles>, secondary: Partial<AgImgStyles>): Partial<AgImgStyles> {
    return {
      ...primary,
      ...secondary,
      animation: {...primary.animation, ...secondary.animation}
    };
  }

  updateUserInput(userInput: AgUserInputConfig): void {
    this.agPlaygroundStoreService.updateUserInputModel(userInput);
  }

  retrieveImgWidthNum(): Observable<number> {
    return this.agPlaygroundStoreService.retrieveImgWidth()
      .pipe(
        map((width: string): number => Number.parseInt(width, 10))
      );
  }
}
