import { NgModule } from '@angular/core';

import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgGalleryThumbnailComponent } from "./components/ag-gallery-thumbnail.component";
import { AgThumbnailPropConverterPipe } from "./pipes/ag-thumbnail-prop-converter.pipe";

@NgModule({
  imports: [
    AgSharedModule
  ],
  declarations: [AgGalleryThumbnailComponent, AgThumbnailPropConverterPipe],
  exports: [AgGalleryThumbnailComponent]
})
export class AgGalleryThumbnailModule { }
