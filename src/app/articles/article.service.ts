import { ArticleDto } from './model/articleDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './model/article';

const URL = 'http://localhost:8080/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  article: Article[];

  getArticles() {
    return this.http.get<any>(URL);
  }

  createArticles(articleDto: ArticleDto) {    
    return this.http.post(URL, articleDto);
  }
}
