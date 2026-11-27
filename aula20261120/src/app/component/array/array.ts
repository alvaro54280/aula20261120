import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-array',
  styleUrl: './array.css',
  templateUrl: './array.html',
})
export class Array {
  numero: number = 40;
  // Queremos o predio
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000]; // pode colocar vazio [] ou abastecer os dados
  //var de string
  localstring: string = "Marisa";
  // Queremos o predio de strings
  localstrings: string[] =["Marisa","roberta","carlos","5000","antonio"];// pode colocar vazio []ou aqbastecer de dados

  constructor() {
    console.log(this.numeros);
    console.log(this.numeros[0]);
    console.log(this.numeros[9]);
    //console.log(this.numeros[10]); // não tem no array funciona e da 
    //criamos uma variacvel local "i" e fazemmos a comparação dela com outro numero e depois incremento
    for (let i:number = 0; i < this.numeros.length; i++) {
      const element:number = this.numeros[i];
      console.log("meu Indice,ou meu Andar: ",  i ," Meu Predio de numeros: ", this.numeros[i]);
      //console.log(this.numeros[i]);
    }

    console.log("************")
    console.log(this.localstrings[5]);
    for (let i = 0; i < this.localstrings.length; i++) {
      const element = this.localstrings[i];
      
    }
  }
}
