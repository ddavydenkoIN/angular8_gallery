import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { AgSearchComponent } from './components/ag-search.component';
import { AgSharedModule } from "../../shared/ag-shared.module";
import { agSearchReducer } from "./store/ag-search.reducer";
import { AgSearchEffects } from "./store/ag-search.effects";
import { AgSearchService } from "./services/ag-search.service";
import { AgSearchStoreService } from "./store/ag-search-store.service";

@NgModule({
  declarations: [AgSearchComponent],
  providers: [AgSearchService, AgSearchStoreService],
  imports: [
    AgSharedModule,
    FormsModule,
    MatButtonModule,
    StoreModule.forFeature('search', agSearchReducer),
    EffectsModule.forFeature([AgSearchEffects])
  ],
  bootstrap: [AgSearchComponent]
})
export class AgSearchModule { }
