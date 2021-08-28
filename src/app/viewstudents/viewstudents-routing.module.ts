import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewstudentsPage } from './viewstudents.page';

const routes: Routes = [
  {
    path: '',
    component: ViewstudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewstudentsPageRoutingModule {}
