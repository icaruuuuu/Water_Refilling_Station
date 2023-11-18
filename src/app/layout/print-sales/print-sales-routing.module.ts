import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintSalesComponent } from './print-sales.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    component: PrintSalesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintSalesRoutingModule { }
