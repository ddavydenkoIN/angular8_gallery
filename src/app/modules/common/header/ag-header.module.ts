import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgHeaderComponent } from './components/ag-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgHeaderComponent],
  exports: [AgHeaderComponent]
})
export class AgHeaderModule { }
