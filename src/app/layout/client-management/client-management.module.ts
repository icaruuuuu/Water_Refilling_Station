import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientManagementComponent } from './client-management.component';
import { ClientManagementRoutingModule } from './client-management-routing.module';

@NgModule({
  declarations: [
    ClientManagementComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
  ]
})
export class ClientManagementModule { }
