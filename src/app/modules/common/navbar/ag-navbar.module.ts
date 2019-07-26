import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AgNavbarComponent } from './components/ag-navbar.component';
import { AgSharedModule } from "../../shared/ag-shared.module";
import { AgLoadableSearchModule } from "../loadable-search/ag-loadable-search.module";


@NgModule({
  imports: [
    AgSharedModule,
    RouterModule,
    AgLoadableSearchModule
  ],
  declarations: [AgNavbarComponent],
  exports: [AgNavbarComponent]
})
export class AgNavbarModule { }
