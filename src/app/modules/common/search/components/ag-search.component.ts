import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-search',
  templateUrl: './ag-search.component.html',
  styleUrls: ['./ag-search.component.less']
})
export class AgSearchComponent implements OnInit {

  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  consoleLog(value: string) {
    console.log(value);
  }

  clearSearchField() {
    this.searchValue = null;
  }
}
