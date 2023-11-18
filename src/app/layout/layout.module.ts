import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './component/screen/screen.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from './component/topnav/topnav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    ScreenComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
