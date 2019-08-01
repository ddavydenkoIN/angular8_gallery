import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { AgGalleryListThumbnail } from "../../../../../../models";
import { AgGalleryListService } from "../services/ag-gallery-list.service";
import { AgWordsHighlighter } from "../../../../../../providers/abstract/ag-words-highlighter";
import { AgSearchService } from "../../../../../common/search/services/ag-search.service";

@Component({
  selector: 'ag-gallery-list',
  templateUrl: './ag-gallery-list.component.html',
  styleUrls: ['./ag-gallery-list.component.less']
})
export class AgGalleryListComponent extends AgWordsHighlighter implements OnInit {

  galleriesList$: Observable<AgGalleryListThumbnail[]>;

  constructor(
    private agGalleriesService: AgGalleryListService,
    protected searchService: AgSearchService
  ) {
    super(searchService);
  }

  ngOnInit() {
    this.agGalleriesService.isNoGalleryLoaded()
      .pipe(
        takeUntil(this.destroy$),
        filter(isNoGalleryLoaded => isNoGalleryLoaded)
      ).subscribe(() => this.agGalleriesService.loadAllGalleries())


    this.galleriesList$ = this.agGalleriesService.retrieveGalleries();
  }

  thumbnailById(index: number, thumbnail: AgGalleryListThumbnail) {
    return thumbnail.id;
  }
}
