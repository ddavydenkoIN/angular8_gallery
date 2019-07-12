import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";

import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgGalleryListRouterModule } from "./ag-gallery-list-router.module";
import { AgGalleryListComponent } from "./components/ag-gallery-list.component";
import { AgGalleryThumbnailModule } from "../gallery-thumbnail/ag-gallery-thumbnail.module";
import { agGalleriesReducer } from "./store/ag-galleries.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AgGalleriesEffects } from "./store/ag-galleries.effects";

@NgModule({
  imports: [
    AgSharedModule,
    AgGalleryListRouterModule,
    AgGalleryThumbnailModule,
    StoreModule.forFeature('galleries', agGalleriesReducer),
    EffectsModule.forFeature([AgGalleriesEffects])
  ],
  declarations: [AgGalleryListComponent]
})
export class AgGalleryListModule { }
