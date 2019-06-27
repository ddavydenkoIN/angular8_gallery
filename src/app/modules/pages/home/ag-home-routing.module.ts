import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgHomeComponent } from "./components/ag-home.component";

const routes: Routes = [
  {path: '', component: AgHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgHomeRoutingModule { }
