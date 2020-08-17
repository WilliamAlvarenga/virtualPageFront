import { ArticleService } from './../article.service';
import { ArticleDto } from './../model/articleDto';
import { Article } from '../model/article';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(private formBuider: FormBuilder,
    private articleSercice: ArticleService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  formCreate = this.formBuider.group({
    titulo: ['', [
      Validators.required
    ]],
    autor: ['', [
      Validators.required
    ]],
    artigo: ['', [
      Validators.required
    ]]
  })

  onSubmit() {
    console.log('test');
    let article: ArticleDto = new ArticleDto();

    article.title = this.formCreate.value.titulo;
    article.author = this.formCreate.value.autor;
    article.text = this.formCreate.value.artigo;

    this.articleSercice
      .createArticles(article)
      .subscribe(data => this.openSnackBar("Artigo enviado para Aprovação!", ""),
        error => this.openSnackBar(error, "")
      );


  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
