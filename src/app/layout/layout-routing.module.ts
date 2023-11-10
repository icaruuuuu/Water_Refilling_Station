import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[
      {
        path: "",
        redirectTo: "dashboard", pathMatch:"prefix",
      },
      {
        path: "dashboard",
        loadChildren: ()=>import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "client",
        loadChildren: ()=>import('./client-management/client-management.module').then(mod => mod.ClientManagementModule),
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class LayoutRoutingModule { }