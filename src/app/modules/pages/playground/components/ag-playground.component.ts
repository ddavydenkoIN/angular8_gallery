import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

import { AgGalleryListService } from "../../home/modules/gallery-list/services/ag-gallery-list.service";
import { AgGallery } from "../../../../models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ag-playground',
  templateUrl: './ag-playground.component.html',
  styleUrls: ['./ag-playground.component.less']
})
export class AgPlaygroundComponent implements OnInit {

  gallery$: Observable<AgGallery>;

  constructor(private galleryListService: AgGalleryListService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.gallery$ = this.galleryListService.getGalleryById(this.route.snapshot.params['id']);
  }

}
