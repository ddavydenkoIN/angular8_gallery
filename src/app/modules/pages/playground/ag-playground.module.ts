import { NgModule } from '@angular/core';

import { AgPlaygroundComponent } from './components/ag-playground.component';
import { AgPlaygroundRoutingModule } from "./ag-playground-routing.module";
import { AgSharedModule } from "../../shared/ag-shared.module";
import { AgGalleryModule } from "./components/gallery/ag-gallery.module";
import { AgPlaygroundService } from "./services/ag-playground.service";

@NgModule({
  declarations: [AgPlaygroundComponent],
  imports: [
    AgSharedModule,
    AgPlaygroundRoutingModule,
    AgGalleryModule,
  ],
  providers: [AgPlaygroundService]
})
export class AgPlaygroundModule { }
