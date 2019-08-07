import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AgHomeStoreService } from "../store/ag-home-store.service";
import { AgSearchableTabs } from "../../../../enums";
import { AgName } from "../../../../models/common/name.model";

@Injectable()
export class AgHomeService {

  constructor(
    private homeStoreService: AgHomeStoreService
  ) {}

  retrieveCurrentlyOpenedTab(): Observable<AgName<string>> {
    return this.homeStoreService.retrieveCurrentlyOpenedTab();
  }

  setCurrentlyOpenedTab(tabName: AgSearchableTabs) {
    this.homeStoreService.setCurrentlyOpenedTab(tabName);
  }
}
