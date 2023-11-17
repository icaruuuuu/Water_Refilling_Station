import { NgModule } from '@angular/core';
import { SalesViewComponent } from './sales-view.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    component: SalesViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesViewRoutingModule { }
