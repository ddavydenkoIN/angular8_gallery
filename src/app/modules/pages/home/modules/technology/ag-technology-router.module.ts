import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgTechnologyComponent } from "./components/ag-technology.component";

const routes: Routes = [{path: '', component: AgTechnologyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgTechnologyRouterModule { }
