import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';

import { AgSearchComponent } from './components/ag-search.component';

@NgModule({
  declarations: [AgSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [AgSearchComponent]
})
export class AgSearchModule { }
