import { Component, Input } from '@angular/core';

import { AgOnChange } from "../../../../../../providers/decorators/AgOnChanges";
import { AgGalleryThumbnail } from "../../../../../../models/gallery";

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
}
