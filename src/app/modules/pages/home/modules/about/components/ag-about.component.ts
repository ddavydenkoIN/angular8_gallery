import { Component, OnInit } from '@angular/core';
import { AgWordsHighlighter } from "../../../../../../providers/abstract/ag-words-highlighter";
import { AgSearchService } from "../../../../../common/search/services/ag-search.service";
import { AgHomeService } from "../../../services/ag-home.service";
import { AgSearchableTabs } from "../../../../../../enums";

@Component({
  selector: 'app-ag-about',
  templateUrl: './ag-about.component.html',
  styleUrls: ['./ag-about.component.less']
})
export class AgAboutComponent extends AgWordsHighlighter implements OnInit {

  constructor(
      protected searchService: AgSearchService,
      private homeService: AgHomeService) {
    super(searchService);
  }

  ngOnInit() {
    this.homeService.setCurrentlyOpenedTab(AgSearchableTabs.ABOUT);
  }
}
