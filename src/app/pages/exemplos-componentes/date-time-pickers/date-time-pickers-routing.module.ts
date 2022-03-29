import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateTimePickersPage } from './date-time-pickers.page';

const routes: Routes = [
  {
    path: '',
    component: DateTimePickersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimePickersPageRoutingModule {}
