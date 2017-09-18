import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { InnerComponent } from './inner/inner.component';
import { SharedModule } from '../shared/shared.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    NavModule,
  ],
  declarations: [MainComponent, InnerComponent]
})
export class MainModule { }
