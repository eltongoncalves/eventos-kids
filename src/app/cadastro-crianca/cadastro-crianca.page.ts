import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-crianca',
  templateUrl: './cadastro-crianca.page.html',
  styleUrls: ['./cadastro-crianca.page.scss'],
})
export class CadastroCriancaPage implements OnInit {

  crianca: Crianca = new Crianca(); 

  constructor() { }

  ngOnInit() {
  }

  salvar() {
    console.log(this.crianca)
  }

}


export class Crianca {
   nome?: string; 
  idade?: string;
  responsavel?: string;


  constructor(
    nome?: string,
    idade?: string,
    responsavel?: string,

  ) {
    this.nome = nome;
    this.idade = idade;
    this.responsavel = responsavel

  }
}