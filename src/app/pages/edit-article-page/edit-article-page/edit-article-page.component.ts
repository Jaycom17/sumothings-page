import { Component, OnInit } from '@angular/core';
import { Article } from '../../../interfaces/Article.interface';
import { ArticleServicesService } from '../../../services/article/article-services.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { InventoryAsideBarComponent } from '../../../components/inventory-aside-bar/inventory-aside-bar.component';
@Component({
  selector: 'app-edit-article-page',
  standalone: true,
  imports: [InventoryAsideBarComponent,ReactiveFormsModule],
  templateUrl: './edit-article-page.component.html',
  styleUrl: './edit-article-page.component.css'
})
export class EditArticlePageComponent {
  constructor(private route: ActivatedRoute, private articleService: ArticleServicesService, private router: Router) { }

  artID: string | any = '';
  article:Article = {
    artTitle: '', 
    artContent: "", 
    artShortDescription: '', 
    artAuthor: "", 
    artDate: ""
  }

  getDateTostring(date:Date):string{
    let dia=date.getDay();
    let mes=date.getMonth();
    let anio=date.getFullYear();
    let diaS:string=""+dia;
    let mesS:string=""+mes;
    if(dia<10){
      diaS="0"+dia;
    }
    if(mes<10){
      mesS="0"+mes;
    }
    return anio+"-"+mesS+"-"+diaS;
  }

  articleForms: FormGroup = new FormGroup({
    artTitle: new FormControl(this.article.artTitle, [Validators.required]),
    artContent: new FormControl(this.article.artContent, [Validators.required, Validators.email]),
    artShortDescription: new FormControl(this.article.artShortDescription, [Validators.required]),
    artAuthor: new FormControl(this.article.artAuthor, [Validators.required]),
    artDate: new FormControl(this.getDateTostring(new Date(this.article.artDate)), [Validators.required]),
  });
  
  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.artID = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.artID).subscribe((article: Article) => {
      this.article = article;
      this.articleForms = new FormGroup({
        artTitle: new FormControl(this.article.artTitle, [Validators.required]),
        artContent: new FormControl(this.article.artContent, [Validators.required, Validators.email]),
        artShortDescription: new FormControl(this.article.artShortDescription, [Validators.required]),
        artAuthor: new FormControl(this.article.artAuthor, [Validators.required]),
        artDate: new FormControl(this.getDateTostring(new Date(this.article.artDate)), [Validators.required]),
      })
    });
  }

  saveArticle() {
    this.article = this.articleForms.value;

    this.article.artDate = this.article.artDate.toString();
    console.log(this.article)
    this.articleService.updateArticle(this.artID,this.article).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Article updated successfully');
          this.articleForms.reset();
          this.router.navigate(['/inventory-articles']);
        } else {
          alert('Error updating Article');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error updating Article: ' + (error.message || 'Unknown error'));
      }
    );
  }


}
