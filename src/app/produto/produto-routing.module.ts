import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutoComponent,
  },
  {
    path: 'formulario-produto',
    component: FormularioProdutoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
