import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Calculosdivisao, Calculosmulti, Calculossoma, Calculossubtracao } from '../models/calculos.model';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComponent implements OnInit {


  
  calculologssoma!: Calculossoma[];

  calculologssubtracao!: Calculossubtracao[];

  calculologsdivisao!: Calculosdivisao[];

  calculologsmulti!: Calculosmulti[];

  somar(a: number, b: number) {

    let contasomar = a + '+' + b;
    let totalsoma = a + b;

    if (totalsoma % 2 === 1) {

      let paridadesoma = "impar";
      console.log('O resultado da soma de ' + contasomar + '=' + totalsoma + ' e é um número ' + paridadesoma);

      const novologsomaimpar = { 
        a: a,
        b: b,
        resultado: contasomar,
        paridade: paridadesoma,
        data: new Date(Date.now()),
      }
      
      if(novologsomaimpar){
        this.calculologssoma.push(novologsomaimpar);
      }
      

    } else {

      let paridadesoma = "par";
      console.log('O resultado da soma de ' + contasomar + '=' + totalsoma + ' e é um número ' + paridadesoma);

      const novologsomapar = { 
        a: a,
        b: b,
        resultado: contasomar,
        paridade: paridadesoma,
        data: new Date(Date.now()),
      }
      if(novologsomapar)
      {
        this.calculologssoma.push(novologsomapar);
      }
      
    }
    
  }

  subtrair(a: number, b: number) {

    let contasubtracao = a + '-' + b;
    let totalsubtracao = a - b;

    if (totalsubtracao % 2 === 1) {

      let paridadesubtracao = "impar";
      console.log('O resultado da subtração de ' + contasubtracao + '=' + totalsubtracao + ' e é um número ' + paridadesubtracao);

      const novologsubimpar = { 
        a: a,
        b: b,
        resultado: contasubtracao,
        paridade: paridadesubtracao,
        data: new Date(Date.now()),
      }

      if(novologsubimpar)
      {
        this.calculologssubtracao.push(novologsubimpar);
      }
      

    } else {

      let paridadesubtracao = "par";
      console.log('O resultado da subtração de ' + contasubtracao + '=' + totalsubtracao + ' e é um número ' + paridadesubtracao);

      const novologsubpar = { 
        a: a,
        b: b,
        resultado: contasubtracao,
        paridade: paridadesubtracao,
        data: new Date(Date.now()),
      }

      if(novologsubpar)
      {this.calculologssubtracao.push(novologsubpar);}
    }
  }

  multiplicar(a: number, b: number) {

    let contamultiplicar = a + 'x' + b;
    let totalmultiplicar = a * b;

    if (totalmultiplicar % 2 === 1) {
      
      let paridademultiplicar = "impar";
      console.log('O resultado da multiplicação de ' + contamultiplicar + '=' + totalmultiplicar + ' e é um número ' + paridademultiplicar);

      const novologmultiimpar = { 
        a: a,
        b: b,
        resultado: contamultiplicar,
        paridade: paridademultiplicar,
        data: new Date(Date.now()),
      }

      if(novologmultiimpar)
      {this.calculologsmulti.push(novologmultiimpar);}

    } else {

      let paridademultiplicar = "par";
      console.log('O resultado da multiplicação de ' + contamultiplicar + '=' + totalmultiplicar + ' e é um número ' + paridademultiplicar);

      const novologmultipar = { 
        a: a,
        b: b,
        resultado: contamultiplicar,
        paridade: paridademultiplicar,
        data: new Date(Date.now()),
      }

      if(novologmultipar)
     { this.calculologsmulti.push(novologmultipar);}

    }
  }

  dividir(a: number, b: number) {

    let contadivisao = a + ':' + b;
    let totaldivisao = a / b;

    if (totaldivisao % 2 === 1) {

      let paridadedivisao = "impar";
      console.log('O resultado da divisão de ' + contadivisao + '=' + totaldivisao + ' e é um número ' + paridadedivisao);

      const novologdivisaoimpar =  { 
        a: a,
        b: b,
        resultado: contadivisao,
        paridade: paridadedivisao,
        data: new Date(Date.now()),
      }

      if(novologdivisaoimpar)
      {this.calculologsdivisao.push(novologdivisaoimpar);}

    } else {

      let paridadedivisao = "par";
      console.log('O resultado da divisão de ' + contadivisao + '=' + totaldivisao + ' e é um número ' + paridadedivisao);

      const novologdivisaopar = { 
        a: a,
        b: b,
        resultado: contadivisao,
        paridade: paridadedivisao,
        data: new Date(Date.now()),
      }  	

      if(novologdivisaopar)
      {this.calculologsdivisao.push(novologdivisaopar);}
    }
  }

  constructor() {
    this.calculologssoma = [];
    this.calculologssubtracao = [];
    this.calculologsdivisao = [];
    this.calculologsmulti = [];
    
    this.somar(6, 3);

    this.subtrair(9, 3);

    this.multiplicar(6, 3);

    this.dividir(6, 3);
 
  }

  getsomas(): Calculossoma [] {
    return this.calculologssoma;
  }
  
  getsubs(): Calculossubtracao [] {
    return this.calculologssubtracao;
  }
  
  getmultis(): Calculosmulti [] {
    return this.calculologsmulti;
  }
  
  getdivis(): Calculosdivisao [] {
    return this.calculologsdivisao;
  }

  ngOnInit(): void {
    
  }



}
