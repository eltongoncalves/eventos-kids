import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCriancasPage } from './listar-criancas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCriancasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCriancasPageRoutingModule {}
