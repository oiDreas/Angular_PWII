import { Component} from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }
  }
}
