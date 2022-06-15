import { Component, OnInit } from '@angular/core';
import { PerguntasService } from 'src/app/services/perguntas.service';
import { Pergunta } from 'src/app/models/pergunta.model';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

perguntas: Pergunta[] = [];
  
  constructor(public perguntasService: PerguntasService) {
    this.perguntas = this.perguntasService.getPerguntas();
  } 

  ngOnInit() {
    
  }

}
