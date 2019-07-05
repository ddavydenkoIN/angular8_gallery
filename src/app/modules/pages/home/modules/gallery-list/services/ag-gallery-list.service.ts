import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AgGalleriesStoreService } from "../store/ag-galleries-store.service";
import { AgGalleryThumbnail } from "../../../../../../models/gallery";

@Injectable()
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
}
