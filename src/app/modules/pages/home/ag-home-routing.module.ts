import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgHomeComponent } from "./ag-home.component";

const routes: Routes = [
  {
    path: '',
    component: AgHomeComponent,
    children: [
      {
        path: 'about',
        pathMatch: 'full',
        loadChildren: () => import('./modules/about/ag-about.module').then(mod => mod.AgAboutModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgHomeRoutingModule { }
