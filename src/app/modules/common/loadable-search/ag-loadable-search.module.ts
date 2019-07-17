import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material";

import { AgSharedModule } from "../../shared/ag-shared.module";
import { LoadableModule } from "ngx-loadable";
import { AgLoadableSearchComponent } from "./components/ag-loadable-search.component";


@NgModule({
  declarations: [AgLoadableSearchComponent],
  imports: [
    AgSharedModule,
    LoadableModule,
    MatIconModule
  ],
  exports: [AgLoadableSearchComponent]
})
export class AgLoadableSearchModule { }
