import { ElementRef, Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

import { AgPlaygroundStoreService } from "../store/ag-playground-store.service";
import { AG_GALLERY_IMG_DEFAULT_WIDTH } from "../../../../consts";
import { AgUserInputConfig, AgGalleryProperties } from "../../../../models";
import { AgGalleryListService } from "../../home/modules/gallery-list/services/ag-gallery-list.service";
import { AgGalleryPropsAdapter } from "../components/gallery/services/ag-gallery-props.adapter";
import { AgUserInputToGalleryPropsConverter } from "./ag-user-input-to-gallery-props.converter";

@Injectable()
export class AgPlaygroundService {

  constructor(private agPlaygroundStoreService: AgPlaygroundStoreService,
              private galleryListService: AgGalleryListService) {
  }

  loadAllImages() {
    this.agPlaygroundStoreService.loadAllImages();
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

  retrieveJoinedGalleryConfig(id: string): Observable<AgGalleryProperties> {
  return this.retrieveGalleryConfig()
    .pipe(
      withLatestFrom(this.galleryListService.getGalleryProps(id)),
      map(([userInput, galleryConf]: [AgUserInputConfig, AgGalleryProperties]): AgGalleryProperties => {
        const convertedUserProps =  new AgGalleryPropsAdapter(new AgUserInputToGalleryPropsConverter()).convert(userInput);
        return {
          parent: [...galleryConf.parent, ...convertedUserProps.parent],
          child: [...galleryConf.child, ... convertedUserProps.child]
        };
      })
    );
  }

  retrieveImgWidthNum(): Observable<number> {
    return this.agPlaygroundStoreService.retrieveImgWidth()
      .pipe(
        map((width: string): number => Number.parseInt(width, 10))
      );
  }
}
