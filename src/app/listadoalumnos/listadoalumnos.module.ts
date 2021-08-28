import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoalumnosPageRoutingModule } from './listadoalumnos-routing.module';

import { ListadoalumnosPage } from './listadoalumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoalumnosPageRoutingModule
  ],
  declarations: [ListadoalumnosPage]
})
export class ListadoalumnosPageModule {}
