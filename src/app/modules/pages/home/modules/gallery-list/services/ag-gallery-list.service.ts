import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AgGalleriesStoreService } from "../store/ag-galleries-store.service";
import { AgGallery, AgGalleryThumbnail } from "../../../../../../models";

@Injectable({providedIn: 'root'})
export class AgGalleryListService {

  constructor(private galleriesStoreService: AgGalleriesStoreService) {}

  loadAllGalleries() {
    this.galleriesStoreService.loadGalleries();
  }

  retrieveGalleries(): Observable<AgGalleryThumbnail[]> {
    return this.galleriesStoreService.retrieveGalleriesList();
  }

  isNoGalleryLoaded(): Observable<boolean> {
    return this.galleriesStoreService.isNoGalleryLoaded();
  }

  getGalleryById(id: string): Observable<AgGallery> {
    return this.galleriesStoreService.retrieveGalleryById(id);
  }
}
