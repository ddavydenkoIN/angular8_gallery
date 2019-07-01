import { NgModule } from '@angular/core';

import { AgHeaderComponent } from './components/ag-header.component';
import { AgSharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    AgSharedModule
  ],
  declarations: [AgHeaderComponent],
  exports: [AgHeaderComponent]
})
export class AgHeaderModule { }
