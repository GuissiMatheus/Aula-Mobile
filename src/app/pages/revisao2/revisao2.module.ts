import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Revisao2PageRoutingModule } from './revisao2-routing.module';

import { Revisao2Page } from './revisao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Revisao2PageRoutingModule
  ],
  declarations: [Revisao2Page]
})
export class Revisao2PageModule {}
