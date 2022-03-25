import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaExemplosPageRoutingModule } from './lista-exemplos-routing.module';

import { ListaExemplosPage } from './lista-exemplos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaExemplosPageRoutingModule
  ],
  declarations: [ListaExemplosPage]
})
export class ListaExemplosPageModule {}
