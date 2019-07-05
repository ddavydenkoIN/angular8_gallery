import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AgPlaygroundComponent } from "./components/ag-playground.component";

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: AgPlaygroundComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgPlaygroundRoutingModule {}
