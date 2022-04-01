import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Revisao2Page } from './revisao2.page';

const routes: Routes = [
  {
    path: '',
    component: Revisao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Revisao2PageRoutingModule {}
