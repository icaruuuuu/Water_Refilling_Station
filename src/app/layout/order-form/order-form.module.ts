import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form.component';
import { OrderFormRoutingModule } from './order-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    OrderFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderFormModule { }
