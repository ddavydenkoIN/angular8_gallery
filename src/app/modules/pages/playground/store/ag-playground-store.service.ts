import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AgPlaygroundState } from "./ag-playground.state";
import { loadAllImages } from "./ag-playground.actions";
import { retrieveAllImageUrls, retrieveInitialNumberOfImages } from "./ag-playground.selectors";

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
}
