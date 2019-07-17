import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';

import { AgHomeComponent } from "./ag-home.component";
import { AgHomeRoutingModule } from "./ag-home-routing.module";
import { AgHeaderModule } from "../../common/header/ag-header.module";
import { AgNavbarModule } from "../../common/navbar/ag-navbar.module";
import { AgSharedModule } from "../../shared/ag-shared.module";
import { AgLoadableSearchModule } from "../../common/loadable-search/ag-loadable-search.module";


@NgModule({
    imports: [
      AgSharedModule,
      AgHomeRoutingModule,

      MatIconModule,
      AgHeaderModule,
      AgNavbarModule,
      AgLoadableSearchModule
    ],
    declarations: [AgHomeComponent]
})
export class AgHomeModule {}
