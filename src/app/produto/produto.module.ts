import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaProdutoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
