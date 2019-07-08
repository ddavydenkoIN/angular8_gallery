import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { loadGalleries } from "./ag-galleries.actions";
import { isNoGalleryLoaded, selectGalleriesPreviewData, selectGalleryById } from './ag-galleries.selectors';
import { AgGallery, AgGalleryThumbnail } from "../../../../../../models";
import { AgState } from "../../../../../../root-store/state";

@Injectable({providedIn: 'root'})
export class AgGalleriesStoreService {

  constructor(private store$: Store<AgState>) {
  }

  loadGalleries(): void {
    this.store$.dispatch(loadGalleries());
  }

  retrieveGalleriesList(): Observable<AgGalleryThumbnail[]> {
    return this.store$.pipe(select(selectGalleriesPreviewData));
  }

  isNoGalleryLoaded(): Observable<boolean> {
    return this.store$.pipe(select(isNoGalleryLoaded));
  }

  retrieveGalleryById(id: string): Observable<AgGallery> {
    return this.store$.pipe(select(selectGalleryById, id));
  }
}
