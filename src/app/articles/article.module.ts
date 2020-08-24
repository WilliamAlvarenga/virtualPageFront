import { RouterModule } from '@angular/router';
import { VmessageModule } from './../components/vmessage/vmessage.module';
import { ArticleFormComponent } from './article-form/article-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleFormComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    VmessageModule,
    RouterModule
  ],
  exports: [
    ArticleComponent,
    ArticleFormComponent
  ]
})
export class ArticleModule { }
