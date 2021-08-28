import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometeacherPage } from './hometeacher.page';

const routes: Routes = [
  {
    path: '',
    component: HometeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometeacherPageRoutingModule {}
