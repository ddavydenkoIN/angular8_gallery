import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgErrorPageComponent } from "./components/ag-error-page.component";

const routes: Routes = [
  {path: '', component: AgErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgErrorPageRoutingModule { }
