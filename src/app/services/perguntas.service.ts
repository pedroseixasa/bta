import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pergunta } from '../models/pergunta.model';

//       Criar um metodo de get de perguntas


@Injectable()
export class PerguntasService {

  private perguntas: Pergunta[] = [
    {
      id: 1,
      descricao: "aaaaaaaaaa?",
      status: "Ativa",
      dataCriacao: new Date(Date.now()),
      utilizador: "pedro",
      categoria: { 
        dataCriacao: new Date(Date.now()),
        id: 1,
        idArea: 1,
        name: "frontend",
        utilizador: "pedro",
      },
      idCategoria : 1,
      area: {
        dataCriacao: new Date(Date.now()),
        id: 1,
        name: "angular",
        utilizador: "pedro"
      },
      idArea: 1,
      opcoes: [{
        correto: true,
        dataCriacao: new Date(Date.now()),
        descricao: "dfsf",
        id: 1,
        idPergunta: 1,
        utilizador: "pedro"
      }]
    },
    {
      id: 2,
      descricao: "bbbbbbb?",
      status: "Ativa",
      dataCriacao: new Date(Date.now()),
      utilizador: "pedro",
      categoria: { 
        dataCriacao: new Date(Date.now()),
        id: 2,
        idArea: 2,
        name: "frontend",
        utilizador: "pedro",
      },
      idCategoria : 1,
      area: {
        dataCriacao: new Date(Date.now()),
        id: 2,
        name: "angular",
        utilizador: "pedro"
      },
      idArea: 2,
      opcoes: [{
        correto: true,
        dataCriacao: new Date(Date.now()),
        descricao: "dfsf",
        id: 2,
        idPergunta: 1,
        utilizador: "pedro"
      }]
    }
  ]
    
    constructor(private http: HttpClient) {

    }

    getPerguntas(): Pergunta[] { return this.perguntas; }
    
}