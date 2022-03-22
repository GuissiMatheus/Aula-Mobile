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
    path: 'lista-categoria',
    loadChildren: () => import('./pages/categoria/lista-categoria/lista-categoria.module').then( m => m.ListaCategoriaPageModule)
  },
  {
    path: 'formulario-categoria',
    loadChildren: () => import('./pages/categoria/formulario-categoria/formulario-categoria.module').then( m => m.FormularioCategoriaPageModule)
  },
  {
    path: 'lista-produto',
    loadChildren: () => import('./pages/produto/lista-produto/lista-produto.module').then( m => m.ListaProdutoPageModule)
  },
  {
    path: 'formulario-produto',
    loadChildren: () => import('./pages/produto/formulario-produto/formulario-produto.module').then( m => m.FormularioProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
