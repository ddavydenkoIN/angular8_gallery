import { Component, OnInit } from '@angular/core';
import { AgWordsHighlighter } from "../../../../../../providers/abstract/ag-words-highlighter";
import { AgSearchService } from "../../../../../common/search/services/ag-search.service";

@Component({
  selector: 'app-ag-about',
  templateUrl: './ag-about.component.html',
  styleUrls: ['./ag-about.component.less']
})
export class AgAboutComponent extends AgWordsHighlighter {

  constructor(protected searchService: AgSearchService) {
    super(searchService);
  }
}
