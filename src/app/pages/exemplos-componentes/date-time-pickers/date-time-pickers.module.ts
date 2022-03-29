import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimePickersPageRoutingModule } from './date-time-pickers-routing.module';

import { DateTimePickersPage } from './date-time-pickers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePickersPageRoutingModule
  ],
  declarations: [DateTimePickersPage]
})
export class DateTimePickersPageModule {}
