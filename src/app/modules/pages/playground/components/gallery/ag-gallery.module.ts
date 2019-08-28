import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AgGalleryComponent } from './components/ag-gallery.component';
import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgThumbnailModule } from "../../../../common/thumbnail/ag-thumbnail.module";
import { AgImageModule } from "../image/image.module";

@NgModule({
  declarations: [AgGalleryComponent],
  imports: [
    AgSharedModule,
    AgThumbnailModule,
    InfiniteScrollModule,
    AgImageModule
  ],
  exports: [AgGalleryComponent]
})
export class AgGalleryModule { }
