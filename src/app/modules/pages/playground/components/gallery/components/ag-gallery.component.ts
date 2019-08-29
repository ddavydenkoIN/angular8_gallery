import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { AgGalleryStyles } from "../../../../../../models/gallery";
import { AgOnChange } from "../../../../../../providers/decorators";
import { AgGalleryService } from "../services/ag-gallery.service";
import { AgUrlId } from "../../../../../../models/common";

@Component({
  selector: 'ag-gallery',
  templateUrl: './ag-gallery.component.html',
  styleUrls: ['./ag-gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AgGalleryService]
})
export class AgGalleryComponent {
  @Input()
  styles: AgGalleryStyles;

  @AgOnChange(function(this: AgGalleryComponent, urls: string[]) {
    if (urls) {
      this.shapes = this.agGalleryService.getRandomShapes(urls.length);
      this.urlsToShow = urls.slice(0, this.agGalleryService.calculateBoundaryIndex(urls.length, this.numberOfImagesOnStart));
    }
    return urls;
  })
  @Input()
  urls: string[];

  @Input()
  loadCount: number;

  @Input()
  containerClass: string;

  @Input()
  isRandomSized?: boolean = false;

  @Input()
  numberOfImagesOnStart?: number = 15;

  shapes: string[];
  urlsToShow: string[];

  constructor(private agGalleryService: AgGalleryService) { }

  onScroll() {
    this.urlsToShow = this.urlsToShow.concat(
      this.urls.slice(this.urlsToShow.length - 1, (this.urlsToShow.length - 1) + this.loadCount)
    );
  }

  onImgClick(event: AgUrlId<number>) {

  }
}
