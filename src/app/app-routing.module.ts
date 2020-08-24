import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '', 
   pathMatch: 'full',
   redirectTo: 'artigos'
  },
  {path: 'artigos', component: ArticleComponent},
  {path: 'criarArtigo' , component: ArticleFormComponent},
  {path: 'artigo/:articleId', component: ArticleDetailComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
