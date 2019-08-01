import { Injectable } from "@angular/core";

import { Action, select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AgHomeState } from "./ag-home.state";
import { retrieveCurrentlyOpenedTab } from "./ag-home.selectors";
import { AgSearchableTabs } from "../../../../enums";
import { updateCurrentTab } from "./ag-home.actions";

@Injectable()
export class AgHomeStoreService {

  constructor(
    private store$: Store<AgHomeState>
  ) {}

  retrieveCurrentlyOpenedTab(): Observable<string> {
    return this.store$.pipe(select(retrieveCurrentlyOpenedTab));
  }

  setCurrentlyOpenedTab(tabName: AgSearchableTabs) {
    this.store$.dispatch(updateCurrentTab({tabName}));
  }
}
