import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoalumnosPage } from './listadoalumnos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoalumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoalumnosPageRoutingModule {}
