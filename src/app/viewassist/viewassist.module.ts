import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewassistPageRoutingModule } from './viewassist-routing.module';

import { ViewassistPage } from './viewassist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewassistPageRoutingModule
  ],
  declarations: [ViewassistPage]
})
export class ViewassistPageModule {}
