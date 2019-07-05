import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AgRoutingModule } from "./app-routing.module";
import { AgTranslateModule } from "./modules/common/translate/ag-translate.module";
import { agReducers, metaReducers } from "./root-store/reducers";
import { agEffects } from "./root-store/effects";


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,

      AgRoutingModule,
      AgTranslateModule,

      HttpClientModule,
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
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
