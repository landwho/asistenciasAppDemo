import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewassistPage } from './viewassist.page';

const routes: Routes = [
  {
    path: '',
    component: ViewassistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewassistPageRoutingModule {}
