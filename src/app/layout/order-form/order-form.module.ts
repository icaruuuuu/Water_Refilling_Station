import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form.component';
import { OrderFormRoutingModule } from './order-form-routing.module';



@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    OrderFormRoutingModule,
  ]
})
export class OrderFormModule { }
