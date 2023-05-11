import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}

var variavel = 0;
var variavel = 10;
console.log('variável', variavel);

function funcao() {
  var outra_variavel = 20;
  var outra_variavel = 30;
  console.log('outra variável: ',outra_variavel);
}
funcao();
