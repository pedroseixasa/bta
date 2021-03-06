import { Component, OnInit } from '@angular/core';
import { Pergunta } from 'src/app/models/pergunta.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

perguntas: Pergunta[] = [];


  
  constructor(private http:HttpClient) {
   //
  } 

  

  ngOnInit() {
    this.fetchPosts();
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  deletePosts(){
    
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
