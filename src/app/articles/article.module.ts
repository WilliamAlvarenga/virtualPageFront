import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [ArticleComponent],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
