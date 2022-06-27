import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pergunta } from 'src/app/models/pergunta.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-examepage-frontend',
  templateUrl: './examepage-frontend.component.html',
  styleUrls: ['./examepage-frontend.component.css']
})
export class ExamepageFrontendComponent implements OnInit {

  perguntas: Pergunta[] = [];

  currentQuestion = 0;

  nextQuestion(){

    this.currentQuestion= this.currentQuestion + 1;
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  
  constructor(private http:HttpClient) {
    //
   } 
  
  private fetchPosts(){

    this.http.get< {[key: string]: Pergunta} >('https://btapp-b6ea9-default-rtdb.europe-west1.firebasedatabase.app/perguntas.json')
    .pipe(
      map(responseData => {
        const postsArray: Pergunta[] = [];
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
