import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AgPlaygroundComponent } from './components/ag-playground.component';
import { AgPlaygroundRoutingModule } from "./ag-playground-routing.module";
import { AgSharedModule } from "../../shared/ag-shared.module";
import { AgGalleryModule } from "./components/gallery/ag-gallery.module";
import { AgPlaygroundService } from "./services/ag-playground.service";
import { agPlaygroundReducer } from "./store/ag-playground.reducer";
import { AgPlaygroundEffects } from "./store/ag-playground.effects";

@NgModule({
  declarations: [AgPlaygroundComponent],
  imports: [
    AgSharedModule,
    AgPlaygroundRoutingModule,
    AgGalleryModule,
    StoreModule.forFeature('playground', agPlaygroundReducer),
    EffectsModule.forFeature([AgPlaygroundEffects])
  ],
  providers: [
    AgPlaygroundService
  ]
})
export class AgPlaygroundModule { }
