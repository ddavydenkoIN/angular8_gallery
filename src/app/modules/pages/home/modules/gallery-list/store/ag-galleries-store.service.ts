import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { EntityState } from "@ngrx/entity";

import { Observable } from "rxjs";

import { loadGalleries } from "./ag-galleries.actions";
import { AgGallery } from "../../../../../../models/index";
import { isNoGalleryLoaded, selectGalleriesPreviewData } from './ag-galleries.selectors';
import { AgGalleryThumbnail } from "../../../../../../models/gallery";

@Injectable({providedIn: 'root'})
export class AgGalleriesStoreService {

  constructor(private store$: Store<EntityState<AgGallery>>) {
  }

  loadGalleries() {
    this.store$.dispatch(loadGalleries());
  }

  retrieveGalleriesList(): Observable<AgGalleryThumbnail[]> {
    return this.store$.pipe(select(selectGalleriesPreviewData));
  }

  isNoGalleryLoaded(): Observable<boolean> {
    return this.store$.pipe(select(isNoGalleryLoaded));
  }
}
