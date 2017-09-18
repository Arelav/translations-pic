import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoContentRoutingModule } from './no-content-routing.module';
import { NoContentComponent } from './no-content.component';

@NgModule({
  imports: [
    CommonModule,
    NoContentRoutingModule
  ],
  declarations: [NoContentComponent]
})
export class NoContentModule { }
