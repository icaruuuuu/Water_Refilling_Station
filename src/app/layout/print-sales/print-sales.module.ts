import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintSalesComponent } from './print-sales.component';
import { PrintSalesRoutingModule } from './print-sales-routing.module';



@NgModule({
  declarations: [
    PrintSalesComponent
  ],
  imports: [
    CommonModule,
    PrintSalesRoutingModule
  ]
})
export class PrintSalesModule { }
