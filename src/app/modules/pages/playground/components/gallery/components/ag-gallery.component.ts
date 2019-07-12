import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AgGalleryProperties } from "../../../../../../models/gallery";
import { AgOnChange } from "../../../../../../providers/decorators/ag-on-changes.decorator";
import { AgGalleryService } from "../services/ag-gallery.service";

@Component({
  selector: 'ag-gallery',
  templateUrl: './ag-gallery.component.html',
  styleUrls: ['./ag-gallery.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AgGalleryService]
})
export class AgGalleryComponent {

  @AgOnChange(function(this: AgGalleryComponent, props: AgGalleryProperties) {
    this.styles = this.agGalleryService.convertStyles(props);

    return props;
  })
  @Input()
  props: AgGalleryProperties;

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

  styles: any;
  shapes: string[];
  urlsToShow: string[];

  constructor(private agGalleryService: AgGalleryService) { }

  onScroll() {
    this.urlsToShow = this.urlsToShow.concat(
      this.urls.slice(this.urlsToShow.length - 1, (this.urlsToShow.length - 1) + this.loadCount)
    );
  }
}
