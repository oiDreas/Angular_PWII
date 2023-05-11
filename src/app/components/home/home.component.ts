import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeEmpresa: string = 'Marombas da Programação';
  nomeFunc: string = 'Agostinho';
  sobrenomeFunc: string = 'Carrara';
  idFunc: number = 1;
  salFunc: number = 3333.32;
  status: boolean = false;
  nomeCompleto: string = ` Nome do Funcionário:${this.nomeFunc} ${this.sobrenomeFunc}`;


    constructor() {
      /*this.nomeFunc = 'Agostinho'
      *this.nomeCompleto = this.nomeFunc + ' ' + this.sobrenomeFunc;
      */
     console.log (this.nomeCompleto);
     console.log ('Nome da empresa', this.nomeEmpresa);
     console.log (`Salario: ${this.salFunc}`);
     console.log (`Id:${this.idFunc}`);
     console.log (`Status: ${this.status}`);

      var variavel1;
      let variavel2;
      const variavel3 = 3;
    }



}
