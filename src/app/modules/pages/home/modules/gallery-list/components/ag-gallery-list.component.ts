import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-gallery-list',
  templateUrl: './ag-gallery-list.component.html',
  styleUrls: ['./ag-gallery-list.component.less']
})
export class AgGalleryListComponent implements OnInit {

  galleries: any = [1, 2 , 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
