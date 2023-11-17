import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesViewComponent } from './sales-view.component';
import { SalesViewRoutingModule } from './sales-view-routing.module';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    SalesViewComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    SalesViewRoutingModule,
  ]
})
export class SalesViewModule { }
