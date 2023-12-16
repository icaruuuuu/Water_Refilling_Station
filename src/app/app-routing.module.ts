import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: "",
  component: AppComponent,
  children:[
    {
      path: "",
      redirectTo: "login", pathMatch:"prefix",
    },
  {
    path: "login",
    loadChildren: ()=>import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "",
    loadChildren: ()=>import('./layout/layout.module').then(mod => mod.LayoutModule),
  }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
