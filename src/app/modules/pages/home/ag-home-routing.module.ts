import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgHomeComponent } from "./ag-home.component";

const routes: Routes = [
  {
    path: '',
    component: AgHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'galleries'},
      {
        path: 'about',
        pathMatch: 'full',
        loadChildren: () => import('./modules/about/ag-about.module').then(mod => mod.AgAboutModule),
      },
      {
        path: 'technology',
        pathMatch: 'full',
        loadChildren: () => import('./modules/technology/ag-technology.module').then(mod => mod.AgTechnologyModule),
      },
      {
        path: 'galleries',
        pathMatch: 'full',
        loadChildren: () => import('./modules/gallery-list/ag-gallery-list.module').then(mod => mod.AgGalleryListModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgHomeRoutingModule { }
