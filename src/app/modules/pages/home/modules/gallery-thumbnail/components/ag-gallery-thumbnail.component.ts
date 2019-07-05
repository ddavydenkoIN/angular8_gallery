import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AgOnChange } from "../../../../../../providers/decorators/ag-on-changes.decorator";
import { AgGalleryThumbnail } from "../../../../../../models/gallery";
import { GALLERY_LIST_THUMBNAILS_IMG_FOLDER } from "../../../../../../consts/img";

@Component({
  selector: 'ag-gallery-thumbnail',
  templateUrl: './ag-gallery-thumbnail.component.html',
  styleUrls: ['./ag-gallery-thumbnail.component.less']
})
export class AgGalleryThumbnailComponent {

  @AgOnChange(function(this: AgGalleryThumbnailComponent, index: number) {
    this.isEven = index % 2 === 0 || index === 0;
    return index;
  })
  @Input()
  index: number;

  @Input('model')
  thumbnail: AgGalleryThumbnail;

  isEven: boolean;
  imgLocation = GALLERY_LIST_THUMBNAILS_IMG_FOLDER;

  constructor(private router: Router) {
  }


  openPlayground(galleryId: string): void {
    this.router.navigateByUrl('/playground/' + galleryId);
  }
}
