import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { AgGalleryListThumbnail } from "../../../../../../models";
import { AgGalleryListService } from "../services/ag-gallery-list.service";
import { AgUnsubscribe } from "../../../../../../providers/abstract/ag-unsubscribe";

@Component({
  selector: 'ag-gallery-list',
  templateUrl: './ag-gallery-list.component.html',
  styleUrls: ['./ag-gallery-list.component.less']
})
export class AgGalleryListComponent extends AgUnsubscribe implements OnInit {

  galleriesList$: Observable<AgGalleryListThumbnail[]>;

  constructor(private agGalleriesService: AgGalleryListService) {
    super();
  }

  ngOnInit() {
    this.agGalleriesService.isNoGalleryLoaded()
      .pipe(
        takeUntil(this.destroy$),
        filter(isNoGalleryLoaded => isNoGalleryLoaded)
      ).subscribe(() => this.agGalleriesService.loadAllGalleries())


    this.galleriesList$ = this.agGalleriesService.retrieveGalleries();
  }

}
