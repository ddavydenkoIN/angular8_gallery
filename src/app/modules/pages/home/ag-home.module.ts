import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from "@ngrx/store";

import { AgHomeComponent } from "./ag-home.component";
import { AgHomeRoutingModule } from "./ag-home-routing.module";
import { AgHeaderModule } from "../../common/header/ag-header.module";
import { AgNavbarModule } from "../../common/navbar/ag-navbar.module";
import { AgSharedModule } from "../../shared/ag-shared.module";
import { AgLoadableSearchModule } from "../../common/loadable-search/ag-loadable-search.module";
import { agHomeReducer } from "./store/ag-home.reducer";
import { AgHomeService } from "./services/ag-home.service";
import { AgHomeStoreService } from "./store/ag-home-store.service";

@NgModule({
  imports: [
    AgSharedModule,
    AgHomeRoutingModule,

    MatIconModule,
    AgHeaderModule,
    AgNavbarModule,
    AgLoadableSearchModule,
    StoreModule.forFeature('home', agHomeReducer)
  ],
  declarations: [AgHomeComponent],
  providers: [
    AgHomeService,
    AgHomeStoreService
  ]
})
export class AgHomeModule {}
