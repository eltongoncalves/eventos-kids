import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCriancasPageRoutingModule } from './listar-criancas-routing.module';

import { ListarCriancasPage } from './listar-criancas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCriancasPageRoutingModule
  ],
  declarations: [ListarCriancasPage]
})
export class ListarCriancasPageModule {}
