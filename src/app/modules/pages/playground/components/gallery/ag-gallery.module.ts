import { NgModule } from '@angular/core';

import { AgGalleryComponent } from './components/ag-gallery.component';
import { AgSharedModule } from "../../../../shared/ag-shared.module";

@NgModule({
  declarations: [AgGalleryComponent],
  imports: [
    AgSharedModule
  ],
  exports: [AgGalleryComponent]
})
export class AgGalleryModule { }
