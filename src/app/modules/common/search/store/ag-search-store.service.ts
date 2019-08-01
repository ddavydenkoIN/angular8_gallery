import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { initSearch, updateSearchValue } from "./ag-search.actions";
import { AgSearchState } from "./ag-search.state";
import { retrieveSearchMap, retrieveSearchValue, retrieveSearchValuPair } from "./ag-search.selectors";
import { AgObject } from "../../../../models/common";

@Injectable({providedIn: "root"})
export class AgSearchStoreService {
  constructor(private store$: Store<AgSearchState>) {
  }

  initSearch(lang: string) {
    this.store$.dispatch(initSearch({payload: lang}));
  }

  updateSearchValue(value: string) {
    this.store$.dispatch(updateSearchValue({payload: value}));
  }

  retrieveSearchValue(): Observable<string> {
    return this.store$.pipe(select(retrieveSearchValue));
  }

  retrieveSearchMap(): Observable<AgObject> {
    return this.store$.pipe(select(retrieveSearchMap));
  }

  retrieveSearchValuePair(): Observable<string[]> {
    return this.store$.pipe(select(retrieveSearchValuPair));
  }
}
