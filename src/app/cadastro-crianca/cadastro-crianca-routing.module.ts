import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCriancaPage } from './cadastro-crianca.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCriancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCriancaPageRoutingModule {}
