import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag-listas',
  styleUrl: './tag-listas.css',
  templateUrl: './tag-listas.html',
})
export class TagListas {
  // string é padrão que fica entre Aspas ou Pelica, simples ou dupla
  // variaveis globais
  //tipagem da variavel
  // o compilador nao quer nada nulo
  nomeVariavelString: string = 'Antonio Marques';
  nomeVariavelString2: string; // pode nao precisar de iniciar e ate nao precisa de colocar o tipo de dados que é String
  nomeVariavelNumber3; // pode nao precisar de dar o tipo de dados

  // number
  nomeVariavelNumber: number = 10;
  // Bolean
  nomeVariavelBoleanFalse: boolean = false;
  nomeVariavelBoleanTrue: boolean = true;

  nomeArrayString: string[] = ['0','1','2'];
  //
  // Este é construtor
  constructor() {
    this.nomeVariavelString2 = 'Miguel';
    this.nomeVariavelNumber3 = 5; // posso colocar uma string que ela fuciona como numero
    // O metodo console.log() faz com que seja lançado ou impresso no cliente ou navegador
    console.log('minha variavel sendo impressa: ', this.nomeVariavelString);
    console.log('minha 2º variavel sendo impressa: ', this.nomeVariavelString2);
    console.log('minha 3ºvariavel sendo impressa: ', this.nomeVariavelNumber);
    console.log('minha 4ºvariavel sendo impressa: ', this.nomeVariavelBoleanFalse);
    console.log('minha 5ºvariavel sendo impressa: ', this.nomeVariavelBoleanTrue);
    this.meotdo_imprimir();
    //Criando error de tipagens
    //this.nomeVariavelNumber = "roberto";
    //this.nomeVariavelBoleanTrue = 10;
  } // FIM DO CONSTRUTOR

  meotdo_imprimir(){
    console.log("metodo imprimir: ", this.nomeVariavelString)
  }
} //Fim da classe
