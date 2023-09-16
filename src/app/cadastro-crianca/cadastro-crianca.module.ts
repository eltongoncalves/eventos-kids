import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCriancaPageRoutingModule } from './cadastro-crianca-routing.module';

import { CadastroCriancaPage } from './cadastro-crianca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCriancaPageRoutingModule
  ],
  declarations: [CadastroCriancaPage]
})
export class CadastroCriancaPageModule {}
