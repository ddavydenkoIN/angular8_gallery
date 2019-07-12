import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { loadGalleries } from "./ag-galleries.actions";
import { isNoGalleryLoaded, selectGalleriesPreviewData, selectGalleryProps } from './ag-galleries.selectors';
import { AgGallery, AgGalleryListThumbnail, AgGalleryProperties } from "../../../../../../models";
import { AgState } from "../../../../../../root-store/state";

@Injectable({providedIn: 'root'})
export class AgGalleriesStoreService {

  constructor(private store$: Store<AgState>) {
  }

  loadGalleries(): void {
    this.store$.dispatch(loadGalleries());
  }

  retrieveGalleriesList(): Observable<AgGalleryListThumbnail[]> {
    return this.store$.pipe(select(selectGalleriesPreviewData));
  }

  isNoGalleryLoaded(): Observable<boolean> {
    return this.store$.pipe(select(isNoGalleryLoaded));
  }

  retrieveGalleryProps(id: string): Observable<AgGalleryProperties> {
    return this.store$.pipe(select(selectGalleryProps, id));
  }
}
