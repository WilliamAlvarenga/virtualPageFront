import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article/article';

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  article: Article[];

  getArticles() {

   return this.http.get<any>(URL + '/article');
    /*.subscribe(data => {

      this.article = data.content;

      console.log('data: ' + data.totalElements);
      console.log('art: ' + this.article);

      for (const art of this.article){
          console.log('Title: ' + art.title);
      }

    });*/
  }
}
