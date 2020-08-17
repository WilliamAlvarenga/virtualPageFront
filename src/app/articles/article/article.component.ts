import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data.content;
    });
  }



}
