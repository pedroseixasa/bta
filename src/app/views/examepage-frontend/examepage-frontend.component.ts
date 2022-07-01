import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pergunta } from 'src/app/models/pergunta.model';
import { map } from 'rxjs';
import { OpcoesPergunta } from 'src/app/models/opcoes-pergunta.model';
import { QuestionModel, QuestionType } from 'src/app/models/questions.model';

@Component({
  selector: 'app-examepage-frontend',
  templateUrl: './examepage-frontend.component.html',
  styleUrls: ['./examepage-frontend.component.css']
})
export class ExamepageFrontendComponent implements OnInit {

  opcoes: OpcoesPergunta[] = [];

  perguntas: QuestionModel[] = [];

  QuestionType = QuestionType;

  currentQuestion = 0;

  Question = 1;

  area = "ola";


  nextQuestion(){
    this.Question ++;
    this.currentQuestion= this.currentQuestion + 1;
  }

  backQuestion(){

    if(this.Question >= 2){
      this.Question --;
      this.currentQuestion= this.currentQuestion - 1;
    }
   
  }

  ngOnInit() {
    this.fetchPosts();

  }

  onFetchPosts(){
    this.fetchPosts();
  }

  
  constructor(private http:HttpClient) {
   


   } 
  
  private fetchPosts(){

    this.http.get< {[key: string]: QuestionModel} >('https://btapp-b6ea9-default-rtdb.europe-west1.firebasedatabase.app/perguntas.json')
    .pipe(
      map(responseData => {
        const postsArray: QuestionModel[] = [];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key)){
        postsArray.push({ ...responseData[key], id: key})
      }
      }
      return postsArray
    }))
    .subscribe(posts => 

      this.perguntas = posts)
  }

}
