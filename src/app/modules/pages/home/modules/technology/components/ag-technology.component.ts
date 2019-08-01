import { Component } from '@angular/core';
import { AgWordsHighlighter } from "../../../../../../providers/abstract/ag-words-highlighter";
import { AgSearchService } from "../../../../../common/search/services/ag-search.service";

@Component({
  selector: 'app-ag-technology',
  templateUrl: './ag-technology.component.html',
  styleUrls: ['./ag-technology.component.less']
})
export class AgTechnologyComponent extends AgWordsHighlighter {

  constructor(protected searchService: AgSearchService) {
    super(searchService);
  }
}
