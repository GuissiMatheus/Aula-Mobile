import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'formulario-produto',
    loadChildren: () => import('./formulario-produto/formulario-produto.module').then( m => m.FormularioProdutoPageModule)
  },
  {
    path: 'formulario-produto/:id',
    loadChildren: () => import('./formulario-produto/formulario-produto.module').then( m => m.FormularioProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
