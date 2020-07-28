import { ArticleFormComponent } from './article-form/article-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticleComponent,
    ArticleFormComponent
  ]
})
export class ArticleModule { }
