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
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'formulario-perfil',
    loadChildren: () => import('./pages/perfil/formulario-perfil/formulario-perfil.module').then( m => m.FormularioPerfilPageModule)
  },
  {
    path: 'visualizar-perfil',
    loadChildren: () => import('./pages/perfil/visualizar-perfil/visualizar-perfil.module').then( m => m.VisualizarPerfilPageModule)
  },
  {
    path: 'lista-exemplos',
    loadChildren: () => import('./pages/exemplos-componentes/lista-exemplos/lista-exemplos.module').then( m => m.ListaExemplosPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/exemplos-componentes/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/exemplos-componentes/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/exemplos-componentes/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/exemplos-componentes/button/button.module').then( m => m.ButtonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
