import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material";

import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AgRoutingModule } from "./app-routing.module";
import { AgTranslateModule } from "./modules/common/translate/ag-translate.module";
import { agReducers, metaReducers } from "./root-store/reducers";
import { agEffects } from "./root-store/effects";
import { AgDataService } from "./providers/services/ag-data.service";
import { LoadableModule } from 'ngx-loadable';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatIconModule,

      AgRoutingModule,
      AgTranslateModule,

      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(AgDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 0}),

      StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
      StoreModule.forRoot(agReducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),

      EffectsModule.forRoot(agEffects),
      !environment.production ? StoreDevtoolsModule.instrument({
          name: 'Angular 8 Gallery'
      }) : [],
      LoadableModule.forRoot({
        appDir: 'src/app/',
        fileMappings: {
          search: 'src/app/modules/common/search/ag-search.module#AgSearchModule'
        }
      }),

    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
