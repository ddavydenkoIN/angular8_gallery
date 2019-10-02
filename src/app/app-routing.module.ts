import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";

const routes: Routes = [
  {
      path: `${environment.headUrl}home`,
      loadChildren: () => import('./modules/pages/home/ag-home.module').then(mod => mod.AgHomeModule),
      data: { title: 'Home page' }
  },
  {
    path: `${environment.headUrl}playground/:id`,
    loadChildren: () => import('./modules/pages/playground/ag-playground.module').then(mod => mod.AgPlaygroundModule)
  },
  { path: '', pathMatch: 'full', redirectTo: `${environment.headUrl}home/galleries` },
  { path: '**', loadChildren: () => import('./modules/pages/error-page/ag-error-page.module').then(mod => mod.AgErrorPageModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AgRoutingModule {}
