import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGalleryListComponent } from "./components/ag-gallery-list.component";

const routes: Routes = [{path: '', component: AgGalleryListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGalleryListRouterModule { }
