import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AgUserInputConfig } from "../../../../models";
import { AgPlaygroundState } from "./ag-playground.state";
import { loadAllImages, resetPlaygroundState, updateUserInputModel } from "./ag-playground.actions";
import { retrieveAllImageUrls, retrieveImgWidth, retrieveInitialGalleryConfig, retrieveInitialNumberOfImages, retrieveUserInteractionFlag } from "./ag-playground.selectors";

@Injectable({providedIn: 'root'})
export class AgPlaygroundStoreService {
  constructor(private store$: Store<AgPlaygroundState>) {
  }

  loadAllImages() {
    this.store$.dispatch(loadAllImages());
  }

  retrieveAllImageUrls(): Observable<string[]> {
    return this.store$.select(retrieveAllImageUrls);
  }

  retrieveInitialNumberOfImages(): Observable<number> {
    return this.store$.select(retrieveInitialNumberOfImages);
  }

  retrieveGalleryConfig(): Observable<AgUserInputConfig> {
    return this.store$.select(retrieveInitialGalleryConfig);
  }

  updateUserInputModel(userInput: AgUserInputConfig): void {
    this.store$.dispatch(updateUserInputModel(userInput));
  }
  retrieveImgWidth(): Observable<string> {
    return this.store$.select(retrieveImgWidth);
  }

  retrieveUserInteractionFlag(): Observable<boolean> {
    return this.store$.select(retrieveUserInteractionFlag);
  }

  resetPlaygroundState(): void {
    this.store$.dispatch(resetPlaygroundState());
  }
}
