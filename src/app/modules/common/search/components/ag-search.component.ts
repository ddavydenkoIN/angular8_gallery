import { Component, OnInit } from '@angular/core';

import { LangChangeEvent } from "@ngx-translate/core";
import { takeUntil } from "rxjs/operators";

import { AgGalleriesStoreService } from "../../../pages/home/modules/gallery-list/store/ag-galleries-store.service";
import { AgTranslateService } from "../../translate/services/ag-translate.service";
import { AgSearchService } from "../services/ag-search.service";
import { AgUnsubscribe } from "../../../../providers/abstract/ag-unsubscribe";

@Component({
  selector: 'ag-search',
  templateUrl: './ag-search.component.html',
  styleUrls: ['./ag-search.component.less']
})
export class AgSearchComponent extends AgUnsubscribe implements OnInit {

  searchValue: string = '';

  constructor(private agStoreService: AgGalleriesStoreService,
              private translateService: AgTranslateService,
              private searchService: AgSearchService) {
    super();
  }

  ngOnInit() {
    this.searchService.initSearch(this.translateService.getCurrentLang());
    this.translateService.onLangChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: LangChangeEvent) => this.searchService.initSearch(data.lang));
  }

  updateSearchValue(searchValue: string) {
    this.searchService.updateSearchValue(searchValue);
  }

  clearSearchField() {
    this.searchValue = null;
    this.searchService.updateSearchValue('');
  }
}
