import { Component, Input, OnInit } from '@angular/core';
import { AgGallery } from "../../../../../../models/gallery";

@Component({
  selector: 'ag-gallery',
  templateUrl: './ag-gallery.component.html',
  styleUrls: ['./ag-gallery.component.less']
})
export class AgGalleryComponent implements OnInit {

  @Input()
  gallery: AgGallery;

  constructor() { }

  ngOnInit() {
  }

}
