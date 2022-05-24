import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Area } from '../models/area.model';
import { Categoria } from "../models/categoria.model";

@Component({
  selector: 'app-criar-pergunta',
  templateUrl: './criar-pergunta.component.html',
  styleUrls: ['./criar-pergunta.component.css'],
  // encapsulation: ViewEncapsulation.
})
export class CriarPerguntaComponent implements OnDestroy {
  // @viewChild @viewChildreen
  @ViewChild('inputRespostaCorreta') someService!: ElementRef;

  selected: any;
  perguntaForm!: FormGroup;
  wasValidated = false;
  categorias: Categoria[] = [];
  areas: Area[] = [
    {
      id: 1,
      name: 'frontend',
      dataCriacao: new Date(Date.now()),
      utilizador: "string",
      categorias: [
        {
          id: 1,
          dataCriacao: new Date(Date.now()),
          utilizador: "string",
          idArea: 1,
          name: "Angular"
        },
        {
          id: 2,
          dataCriacao: new Date(Date.now()),
          utilizador: "string",
          idArea: 1,
          name: "Html"
        },
      ]
    },
    {
      id: 2,
      name: 'backend',
      dataCriacao: new Date(Date.now()),
      utilizador: "string",
      categorias: [
        {
          id: 3,
          dataCriacao: new Date(Date.now()),
          utilizador: "string",
          idArea: 2,
          name: "java"
        },
        {
          id: 4,
          dataCriacao: new Date(Date.now()),
          utilizador: "string",
          idArea: 2,
          name: "maevan"
        },
      ]
    }
  ];

  private areaSub!: Subscription;

  constructor() {
    this.setupForm();
  }

  ngOnDestroy(): void {
    this.areaSub.unsubscribe();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.perguntaForm.value);

    if (this.perguntaForm.valid === true) {
      window.location.href = '/perguntas';
    }

    this.wasValidated = true;
  }

  private setupForm(): void {
    const now = new Date();

    this.perguntaForm = new FormGroup({
      data: new FormControl(now),
      utilizador: new FormControl('teste123'),
      status: new FormControl('Válido'),
      area: new FormControl(''),
      categoria: new FormControl(''),
      pergunta: new FormControl(''),
      respostacerta: new FormControl(''),
      resposta1: new FormControl(''),
      resposta2: new FormControl(''),
      resposta3: new FormControl(''),
    });

    this.areaSub = this.perguntaForm.controls['area'].valueChanges.subscribe((idArea: string) => {
      // for(let a=0; this.areas.length>a; a++)
      // {
      //   if(this.areas[a].id == idArea)
      //   {
      //    this.categorias = this.areas[a].categorias;
      //   }
      //}

      //   this.areas.forEach((value: Area, index: number, array: Area[]) => {
      //     if(this.areas[index].id == idArea)
      //     {
      //       this.categorias = this.areas[index].categorias;
      //     }
      //   })

      //   this.categorias = this.areas.filter((area: Area, index: number, array: Area[]) => {
      //      return area.id === idArea;
      //   })[0].categorias;

      //   this.categorias = this.areas.filter((area: Area, index: number, array: Area[]) => {
      //      return area.id === idArea;
      //   }).pop()!.categorias;

      //   this.categorias = this.areas.find((area: Area, index: number, array: Area[]) => {
      //     return area.id === idArea;
      //  })!.categorias;

      const selectedAarea = this.areas.find((area: Area, index: number, array: Area[]) => {
        return area.id === +idArea;
      })!;

      this.categorias = selectedAarea.categorias;

    });
  }
}

