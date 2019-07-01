import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AgNavbarComponent } from './components/ag-navbar.component';
import { AgSharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [
    AgSharedModule,
    RouterModule
  ],
  declarations: [AgNavbarComponent],
  exports: [AgNavbarComponent]
})
export class AgNavbarModule { }
