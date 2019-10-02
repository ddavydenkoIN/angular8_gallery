import { NgModule } from '@angular/core';

import { AgHeaderComponent } from './components/ag-header.component';
import { AgSharedModule } from "../../shared/ag-shared.module";

@NgModule({
  imports: [
    AgSharedModule
  ],
  declarations: [AgHeaderComponent],
  exports: [AgHeaderComponent],
  viewPortSize: []
})
export class AgHeaderModule { }
