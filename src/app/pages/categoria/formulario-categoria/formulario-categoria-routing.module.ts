import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioCategoriaPage } from './formulario-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioCategoriaPageRoutingModule {}
