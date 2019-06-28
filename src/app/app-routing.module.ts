import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "home",
        loadChildren: () => import('./modules/pages/home/ag-home.module').then(mod => mod.AgHomeModule),
        data: { title: 'Home page' }
    },
    {
        path: "panda",
        loadChildren: () => import('./modules/pages/error-page/ag-error-page.module').then(mod => mod.AgErrorPageModule),
        data: { title: 'Home page' }
    },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', loadChildren: () => import('./modules/pages/error-page/ag-error-page.module').then(mod => mod.AgErrorPageModule)}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AgRoutingModule {}