import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgAboutComponent } from "./components/ag-about.component";

const routes: Routes = [{path: '', component: AgAboutComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgAboutRouterModule { }
