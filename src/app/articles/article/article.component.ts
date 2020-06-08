import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './article';
import { s } from '@angular/core/src/render3';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles$: Observable<Articles[]>;

  article: Articles[];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    /* this.articleService.getArticles().subscribe(data => this.article = {
      id: (data as any).id,
      title: (data as any).title,
      madeDate: (data as any).madeDate,
      author: (data as any).author,
      text: (data as any).text
     });
     */

    this.articleService.getArticles();




  }


}
