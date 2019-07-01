import { NgModule } from '@angular/core';

import { AgSharedModule } from "../../../../shared/shared.module";
import { AgGalleryListRouterModule } from "./ag-gallery-list-router.module";
import { AgGalleryListComponent } from "./components/ag-gallery-list.component";
import { AgGalleryThumbnailModule } from "../gallery-thumbnail/ag-gallery-thumbnail.module";

@NgModule({
  imports: [
    AgSharedModule,
    AgGalleryListRouterModule,
    AgGalleryThumbnailModule
  ],
  declarations: [AgGalleryListComponent]
})
export class AgGalleryListModule { }
