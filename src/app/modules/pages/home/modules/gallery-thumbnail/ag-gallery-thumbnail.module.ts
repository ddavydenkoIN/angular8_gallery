import { NgModule } from '@angular/core';

import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgGalleryThumbnailComponent } from "./components/ag-gallery-thumbnail.component";

@NgModule({
  imports: [
    AgSharedModule
  ],
  declarations: [AgGalleryThumbnailComponent],
  exports: [AgGalleryThumbnailComponent]
})
export class AgGalleryThumbnailModule { }