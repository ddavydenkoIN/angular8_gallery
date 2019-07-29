import { Injectable } from "@angular/core";

import { AgSearchStoreService } from "../store/ag-search-store.service";

@Injectable()
export class AgSearchService {

  constructor(private searchStoreService: AgSearchStoreService) {
  }

  initSearch(lang: string): void {
    this.searchStoreService.initSearch(lang);
  }
}
