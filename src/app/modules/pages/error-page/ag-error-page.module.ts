import { NgModule } from "@angular/core";

import { AgErrorPageRoutingModule } from "./ag-error-page-routing.module";
import { AgErrorPageComponent } from "./components/ag-error-page.component";
import { AgSharedModule } from "../../shared/ag-shared.module";

@NgModule({
    imports: [
        AgSharedModule,
        AgErrorPageRoutingModule
    ],
    declarations: [AgErrorPageComponent]
})
export class AgErrorPageModule {}
