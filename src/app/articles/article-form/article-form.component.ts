import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  
  constructor(private formBuider: FormBuilder) { }
  
  ngOnInit(): void {
    //this.createForm();
  }
  
  teste: string ;

  formCreate = this.formBuider.group({
    titulo: ['']
  })
  
  onSubmit(){
 console.log('test');
   
 
console.log(this.formCreate.value);

this.teste = this.formCreate.value.titulo;
console.log(this.teste);
 
  }

 
}
