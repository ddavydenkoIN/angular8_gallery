import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AgGalleriesStoreService } from "../store/ag-galleries-store.service";
import { AgGalleryListThumbnail, AgGalleryStyles } from "../../../../../../models";

@Injectable({providedIn: 'root'})
export class AgGalleryListService {

  constructor(private galleriesStoreService: AgGalleriesStoreService) {}

  loadAllGalleries() {
    this.galleriesStoreService.loadGalleries();
  }

  retrieveGalleries(): Observable<AgGalleryListThumbnail[]> {
    return this.galleriesStoreService.retrieveGalleriesList();
  }

  isNoGalleryLoaded(): Observable<boolean> {
    return this.galleriesStoreService.isNoGalleryLoaded();
  }

  getGalleryProps(id: string): Observable<AgGalleryStyles> {
    return this.galleriesStoreService.retrieveGalleryProps(id);
  }
}
