import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgErrorPageRoutingModule } from "./ag-error-page-routing.module";
import { AgErrorPageComponent } from "./components/ag-error-page.component";

@NgModule({
    imports: [
        CommonModule,
        AgErrorPageRoutingModule
    ],
    declarations: [AgErrorPageComponent]
})
export class AgErrorPageModule {}
