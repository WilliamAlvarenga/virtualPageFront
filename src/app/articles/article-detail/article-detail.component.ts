import { Observable } from 'rxjs';
import { ArticleService } from './../article.service';
import { Article } from './../model/article';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article$: Observable<Article>;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const articleId = this.route.snapshot.params.articleId;
    this.article$ = this.articleService.getArticleById(articleId);

  }

}
