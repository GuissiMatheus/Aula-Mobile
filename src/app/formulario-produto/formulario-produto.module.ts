import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioProdutoPageRoutingModule } from './formulario-produto-routing.module';

import { FormularioProdutoPage } from './formulario-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioProdutoPageRoutingModule
  ],
  declarations: [FormularioProdutoPage]
})
export class FormularioProdutoPageModule {}
