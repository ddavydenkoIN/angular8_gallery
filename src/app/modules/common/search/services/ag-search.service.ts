import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AgSearchStoreService } from "../store/ag-search-store.service";
import { AgObject } from "../../../../models/common";

@Injectable({providedIn: "root"})
export class AgSearchService {

  constructor(private searchStoreService: AgSearchStoreService) {
  }

  initSearch(lang: string): void {
    this.searchStoreService.initSearch(lang);
  }

  updateSearchValue(value: string) {
    this.searchStoreService.updateSearchValue(value);
  }

  getSearchValue(): Observable<string> {
    return this.searchStoreService.retrieveSearchValue();
  }

  getSearchMap(): Observable<AgObject> {
    return this.searchStoreService.retrieveSearchMap();
  }

  getTabToRedirect(searchString: string, searchMap: AgObject): string {
    const entry = searchString && Object.entries(searchMap)
      .find(([key, keyPhracePairs]: [string, AgObject]) => Object
        .values(keyPhracePairs)
        .some((phrace: string) => phrace.toLowerCase().includes(searchString.toLowerCase())));

    return entry ? entry[0] : null;
  }

  getSearchValuePairs(): Observable<string[]> {
    return this.searchStoreService.retrieveSearchValuePair();
  }
}
