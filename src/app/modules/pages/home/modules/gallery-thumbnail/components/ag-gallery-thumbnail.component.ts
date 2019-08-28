import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AgGalleryListThumbnail } from "../../../../../../models";
import { GALLERY_LIST_THUMBNAILS_IMG_FOLDER } from "../../../../../../consts";
import { AgOnChange } from "../../../../../../providers/decorators";

@Component({
  selector: 'ag-gallery-thumbnail',
  templateUrl: './ag-gallery-thumbnail.component.html',
  styleUrls: ['./ag-gallery-thumbnail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgGalleryThumbnailComponent {

  @Input()
  index: number;

  @AgOnChange(function(this: AgGalleryThumbnailComponent, thumbnail: AgGalleryListThumbnail) {
    if (!this.thumbnailUrl) {
      this.thumbnailUrl = GALLERY_LIST_THUMBNAILS_IMG_FOLDER + thumbnail.thumbnailImg.name;
    }
    return thumbnail;
  })
  @Input('model')
  thumbnail: AgGalleryListThumbnail;

  thumbnailUrl: string;
  objectKeys = Object.keys;

  constructor(private router: Router) {
  }

  openPlayground(galleryId: number): void {
    this.router.navigateByUrl('/playground/' + galleryId);
  }
}
