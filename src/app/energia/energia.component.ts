import { Component } from '@angular/core';
import { Energia } from './energia';

@Component({
  selector: 'app-energia',
  templateUrl: 'energia.component.html',
  styleUrls: ['energia.component.scss']
})
export class EnergiaComponent {

  itens = new Array<Energia>();
  fatorMultiplicador = 0.90;

  constructor() {
    this.itens.push(new Energia('Heverton', '634263746', 1232.40 , 1421.40, '03-09-2020'));
    this.itens.push(new Energia('Jose', '2423423', 48.40 , 56.40, '03-09-2020'));
  }

}