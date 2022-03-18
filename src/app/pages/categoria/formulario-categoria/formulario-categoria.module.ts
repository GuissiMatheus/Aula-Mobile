import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioCategoriaPageRoutingModule } from './formulario-categoria-routing.module';

import { FormularioCategoriaPage } from './formulario-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormularioCategoriaPageRoutingModule
  ],
  declarations: [FormularioCategoriaPage]
})
export class FormularioCategoriaPageModule {}
