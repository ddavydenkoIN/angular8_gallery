import { Injectable } from "@angular/core";

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AgHomeState } from "./ag-home.state";
import { retrieveCurrentlyOpenedTab } from "./ag-home.selectors";
import { AgSearchableTabs } from "../../../../enums";
import { updateCurrentTab } from "./ag-home.actions";
import { AgName } from "../../../../models/common/name.model";

@Injectable()
export class AgHomeStoreService {

  constructor(
    private store$: Store<AgHomeState>
  ) {}

  retrieveCurrentlyOpenedTab(): Observable<AgName<string>> {
    return this.store$.pipe(select(retrieveCurrentlyOpenedTab));
  }

  setCurrentlyOpenedTab(tabName: AgSearchableTabs) {
    this.store$.dispatch(updateCurrentTab({tabName}));
  }
}
