import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content.component';

const routes: Routes = [
  {
    path: 'no-content',
    component: NoContentComponent,
  },
  {
    path: '**',
    redirectTo: 'no-content',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoContentRoutingModule { }
