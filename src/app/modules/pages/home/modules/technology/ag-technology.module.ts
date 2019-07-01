import { NgModule } from '@angular/core';

import { AgSharedModule } from "../../../../shared/shared.module";
import { AgTechnologyRouterModule } from "./ag-technology-router.module";
import { AgTechnologyComponent } from "./components/ag-technology.component";

@NgModule({
  imports: [
    AgSharedModule,
    AgTechnologyRouterModule
  ],
  declarations: [AgTechnologyComponent],
})
export class AgTechnologyModule { }
