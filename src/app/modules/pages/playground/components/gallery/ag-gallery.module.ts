import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AgGalleryComponent } from './components/ag-gallery.component';
import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgThumbnailModule } from "../../../../common/thumbnail/ag-thumbnail.module";

@NgModule({
  declarations: [AgGalleryComponent],
  imports: [
    AgSharedModule,
    AgThumbnailModule,
    InfiniteScrollModule
  ],
  exports: [AgGalleryComponent]
})
export class AgGalleryModule { }
