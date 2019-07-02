import { Component, OnInit } from '@angular/core';

import { AgGalleryThumbnail } from "../../../../../../models";

@Component({
  selector: 'ag-gallery-list',
  templateUrl: './ag-gallery-list.component.html',
  styleUrls: ['./ag-gallery-list.component.less']
})
export class AgGalleryListComponent implements OnInit {

  galleries: any = [1, 2 , 3, 4, 5];

  galleryThumbnails: AgGalleryThumbnail[] = [
    {
      header: 'Traditional Floats - broken',
      propHeader: 'Props used:',
      propsList: [
        {name: 'float', value: 'left'},
        {name: 'width', value: '250px'},
        {name: 'margin-right', value: '20px'}
      ]
    },
    {
      header: 'Traditional Floats - broken',
      propHeader: 'Props used',
      propsList: [
        {name: 'float', value: 'left'},
        {name: 'width', value: '250px'},
        {name: 'margin-right', value: '20px'}
      ]
    },
    {
      header: 'Traditional Floats - broken',
      propHeader: 'Props used',
      propsList: [
        {name: 'float', value: 'left'},
        {name: 'width', value: '250px'},
        {name: 'margin-right', value: '20px'}
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
