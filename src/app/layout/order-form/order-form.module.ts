import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form.component';
import { OrderFormRoutingModule } from './order-form-routing.module';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    OrderFormRoutingModule,
  ]
})
export class OrderFormModule { }
