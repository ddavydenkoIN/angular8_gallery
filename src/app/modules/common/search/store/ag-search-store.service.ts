import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { initSearch } from "./ag-search.actions";
import { AgSearchState } from "./ag-search.state";

@Injectable()
export class AgSearchStoreService {
  constructor(private store$: Store<AgSearchState>) {

  }

  initSearch(lang: string) {
    this.store$.dispatch(initSearch({payload: lang}));
  }
}
