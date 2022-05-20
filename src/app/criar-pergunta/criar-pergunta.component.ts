import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Validações das informações inseridas no formulario -> olhar txt de requisitos
//    https://getbootstrap.com/docs/5.2/forms/validation/

// preencher os campos nao visiveis no onSubmit -> Dta Criação, Usuario, status

// preencher os select de area e categoria, quando mudar o valor da area, mudar os valores da categoria.
//   mobile kotlin, gadle, andoid, ios,
//   backend maven, java, spring

// deixar o botao de salvar sempre habilitado

@Component({
  selector: 'app-criar-pergunta',
  templateUrl: './criar-pergunta.component.html',
  styleUrls: ['./criar-pergunta.component.css']
})
export class CriarPerguntaComponent implements OnInit, AfterViewInit {

  // @viewChild @viewChildreen

  @ViewChild('inputRespostaCorreta') someService!: ElementRef;

  selected: any;
  perguntaForm: FormGroup;
  areaAr: string[] = [
    'frontend', 'backend', 'mobile'
  ];


  constructor() { 
    this.perguntaForm = new FormGroup({
      area: new FormControl(''),
      categoria:  new FormControl(''),
      pergunta: new FormControl(''),
      respostacerta: new FormControl(''),
      resposta1: new FormControl(''),
      resposta2: new FormControl(''),
      resposta3: new FormControl(''),
    });

    const sub = this.perguntaForm.controls['area'].valueChanges.subscribe((newValue) => 
      console.log(newValue)
    );
  }



  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.perguntaForm.value);

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }



}
