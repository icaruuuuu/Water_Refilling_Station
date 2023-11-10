import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    ScreenComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScreenComponent,
    SidenavComponent,
  ]
})
export class ComponentModule { }
