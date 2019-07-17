import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';

import { AgSearchComponent } from './components/ag-search.component';
import { AgSharedModule } from "../../shared/ag-shared.module";

@NgModule({
  declarations: [AgSearchComponent],
  imports: [
    AgSharedModule,
    FormsModule,
    MatButtonModule
  ],
  bootstrap: [AgSearchComponent],
  // exports: [AgSearchComponent],
})
export class AgSearchModule { }
