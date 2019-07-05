import { Component, OnInit } from '@angular/core';
import { AgGalleriesStoreService } from "../../../pages/home/modules/gallery-list/store/ag-galleries-store.service";

@Component({
  selector: 'ag-search',
  templateUrl: './ag-search.component.html',
  styleUrls: ['./ag-search.component.less']
})
export class AgSearchComponent implements OnInit {

  searchValue: string = '';

  constructor(private agStoreService: AgGalleriesStoreService) { }

  ngOnInit() {
  }

  consoleLog(value: string) {
    this.agStoreService.loadGalleries();
    console.log(value);
  }

  clearSearchField() {
    this.searchValue = null;
  }
}
