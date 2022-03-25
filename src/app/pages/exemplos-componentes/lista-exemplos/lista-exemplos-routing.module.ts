import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaExemplosPage } from './lista-exemplos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaExemplosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExemplosPageRoutingModule {}
