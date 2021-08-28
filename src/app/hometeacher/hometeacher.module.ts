import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometeacherPageRoutingModule } from './hometeacher-routing.module';

import { HometeacherPage } from './hometeacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometeacherPageRoutingModule
  ],
  declarations: [HometeacherPage]
})
export class HometeacherPageModule {}
