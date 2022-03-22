import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioProdutoPage } from './formulario-produto.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioProdutoPageRoutingModule {}
