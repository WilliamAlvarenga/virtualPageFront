import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Articles } from './article/article';

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

article: Articles[];

  getArticles() {

    this.http.get<any>(URL + '/article').subscribe(data => {

      this.article = data.content;

      console.log('data: ' + data.totalElements);
      console.log('art: ' + this.article);

      for(let art of this.article){
          console.log('Title: ' + art.title);
      }

    });


     /*this.http.get<Articles[]>(URL + '/article')
     .subscribe((data: Articles[]) => {
        this.article = data;
     });
     */


  }

}
 // .subscribe(data => console.log(data.valueOf()));
