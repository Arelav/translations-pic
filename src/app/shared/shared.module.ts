import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavModule } from '../nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TranslateModule,
  ],
  declarations: []
})
export class SharedModule { }
