import { NgModule } from '@angular/core';

import { AgGalleryComponent } from './components/ag-gallery.component';
import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgThumbnailModule } from "../../../../common/thumbnail/ag-thumbnail.module";

@NgModule({
  declarations: [AgGalleryComponent],
  imports: [
    AgSharedModule,
    AgThumbnailModule
  ],
  exports: [AgGalleryComponent]
})
export class AgGalleryModule { }
