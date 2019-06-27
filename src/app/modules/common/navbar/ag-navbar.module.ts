import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgNavbarComponent } from './components/ag-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgNavbarComponent],
  exports: [AgNavbarComponent]
})
export class AgNavbarModule { }
