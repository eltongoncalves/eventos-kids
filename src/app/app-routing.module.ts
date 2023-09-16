import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro-crianca',
    loadChildren: () => import('./cadastro-crianca/cadastro-crianca.module').then( m => m.CadastroCriancaPageModule)
  },
  {
    path: 'listar-criancas',
    loadChildren: () => import('./listar-criancas/listar-criancas.module').then( m => m.ListarCriancasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
