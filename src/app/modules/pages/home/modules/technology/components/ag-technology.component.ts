import { Component, OnInit } from '@angular/core';

import { AgWordsHighlighter } from "../../../../../../providers/abstract/ag-words-highlighter";
import { AgSearchService } from "../../../../../common/search/services/ag-search.service";
import { AgHomeService } from "../../../services/ag-home.service";
import { AgSearchableTabs } from "../../../../../../enums";

@Component({
  selector: 'app-ag-technology',
  templateUrl: './ag-technology.component.html',
  styleUrls: ['./ag-technology.component.less']
})
export class AgTechnologyComponent extends AgWordsHighlighter implements OnInit {

  constructor(
      protected searchService: AgSearchService,
      private homeService: AgHomeService
  ) {
    super(searchService);
  }

  ngOnInit(): void {
    this.homeService.setCurrentlyOpenedTab(AgSearchableTabs.TECHNOLOGY);
  }
}
