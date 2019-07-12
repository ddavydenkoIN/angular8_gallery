import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { AgPlaygroundStoreService } from "../store/ag-playground-store.service";

@Injectable()
export class AgPlaygroundService {

  constructor(private agPlaygroundStoreService: AgPlaygroundStoreService) {
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
}
