import { NgModule } from "@angular/core";

import { AgHomeComponent } from "./ag-home.component";
import { AgHomeRoutingModule } from "./ag-home-routing.module";
import { AgHeaderModule } from "../../common/header/ag-header.module";
import { AgNavbarModule } from "../../common/navbar/ag-navbar.module";
import { AgSearchModule } from "../../common/search/ag-search.module";
import { AgSharedModule } from "../../shared/ag-shared.module";

@NgModule({
    imports: [
      AgSharedModule,
      AgHomeRoutingModule,
      AgHeaderModule,
      AgNavbarModule,
      AgSearchModule
    ],
    declarations: [AgHomeComponent]
})
export class AgHomeModule {}
