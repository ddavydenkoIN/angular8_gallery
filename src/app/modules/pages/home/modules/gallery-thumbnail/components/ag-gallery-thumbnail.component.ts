import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgGalleryListThumbnail } from "../../../../../../models";
import { GALLERY_LIST_THUMBNAILS_IMG_FOLDER } from "../../../../../../consts";

@Component({
  selector: 'ag-gallery-thumbnail',
  templateUrl: './ag-gallery-thumbnail.component.html',
  styleUrls: ['./ag-gallery-thumbnail.component.less']
})
export class AgGalleryThumbnailComponent {

  @Input()
  index: number;

  @Input('model')
  thumbnail: AgGalleryListThumbnail;

  imgLocation = GALLERY_LIST_THUMBNAILS_IMG_FOLDER;

  constructor(private router: Router) {
  }


  openPlayground(galleryId: number): void {
    this.router.navigateByUrl('/playground/' + galleryId);
  }
}
