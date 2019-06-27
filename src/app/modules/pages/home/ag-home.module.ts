import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgHomeComponent } from "./components/ag-home.component";
import { AgHomeRoutingModule } from "./ag-home-routing.module";
import { AgHeaderModule } from "../../common/header/ag-header.module";
import { AgNavbarModule } from "../../common/navbar/ag-navbar.module";
import { AgSearchModule } from "../../common/search/ag-search.module";

@NgModule({
    imports: [
      CommonModule,
      AgHomeRoutingModule,
      AgHeaderModule,
      AgNavbarModule,
      AgSearchModule
    ],
    declarations: [AgHomeComponent]
})
export class AgHomeModule {}
