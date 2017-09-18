import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
    SharedModule,
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class NavModule { }
