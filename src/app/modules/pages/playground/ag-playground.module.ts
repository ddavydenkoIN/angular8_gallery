import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule, MatSelectModule } from "@angular/material";
import { MatExpansionModule } from '@angular/material/expansion';

import { AgPlaygroundComponent } from './components/ag-playground.component';
import { AgPlaygroundRoutingModule } from "./ag-playground-routing.module";
import { AgSharedModule } from "../../shared/ag-shared.module";
import { AgGalleryModule } from "./components/gallery/ag-gallery.module";
import { AgPlaygroundService } from "./services/ag-playground.service";
import { agPlaygroundReducer } from "./store/ag-playground.reducer";
import { AgPlaygroundEffects } from "./store/ag-playground.effects";
import { AgUserInputToGalleryPropsConverter } from "./services/ag-user-input-to-gallery-props.converter";
import { AgPlaygroundFormComponent } from './components/form/ag-playground-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgPlaygroundFormService } from "./services/ag-playground-form.service";
import { AgAnimationExamplesComponent } from './components/animation-examples/ag-animation-examples.component';

@NgModule({
  declarations: [AgPlaygroundComponent, AgPlaygroundFormComponent, AgAnimationExamplesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AgSharedModule,
    AgPlaygroundRoutingModule,
    AgGalleryModule,
    StoreModule.forFeature('playground', agPlaygroundReducer),
    EffectsModule.forFeature([AgPlaygroundEffects]),

    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [
    AgPlaygroundService,
    AgPlaygroundFormService,
    AgUserInputToGalleryPropsConverter
  ]
})
export class AgPlaygroundModule { }
