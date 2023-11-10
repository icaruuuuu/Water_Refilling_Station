import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component/component.module';
import { ClientManagementComponent } from './client-management.component';
import { ClientManagementRoutingModule } from './client-management-routing.module';

@NgModule({
  declarations: [
    ClientManagementComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ClientManagementRoutingModule,
  ]
})
export class ClientManagementModule { }
