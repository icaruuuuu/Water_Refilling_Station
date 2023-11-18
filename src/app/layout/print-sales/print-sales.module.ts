import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintSalesComponent } from './print-sales.component';
import { PrintSalesRoutingModule } from './print-sales-routing.module';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    PrintSalesComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    PrintSalesRoutingModule
  ]
})
export class PrintSalesModule { }
