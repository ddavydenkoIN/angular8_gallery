import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { AgRoutingModule } from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        AgRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument({
            name: 'Angular 8 Gallery'
        }) : [],
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        BrowserAnimationsModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
