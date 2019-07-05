import { NgModule } from '@angular/core';

import { AgAboutComponent } from "./components/ag-about.component";
import { AgSharedModule } from "../../../../shared/ag-shared.module";
import { AgAboutRouterModule } from "./ag-about-router.module";

@NgModule({
  imports: [
    AgSharedModule,
    AgAboutRouterModule
  ],
  declarations: [AgAboutComponent]
})
export class AgAboutModule { }
