import { Component } from '@angular/core';
import { Article } from '../../interfaces/Article.interface';
import { ArticleServicesService } from '../../services/article/article-services.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-create-article-page',
  standalone: true,
  imports: [InventoryAsideBarComponent,ReactiveFormsModule],
  templateUrl: './create-article-page.component.html',
  styleUrl: './create-article-page.component.css'
})
export class CreateArticlePageComponent {

  constructor(private articleService: ArticleServicesService, private router: Router) { }

  article:Article = {
    artID: '', 
    artTitle: '', 
    artContent: "", 
    artShortDescription: '', 
    artAuthor: "", 
    artDate: ""
  }

  articleForms: FormGroup = new FormGroup({
    artTitle: new FormControl('', [Validators.required]),
    artContent: new FormControl('', [Validators.required, Validators.email]),
    artShortDescription: new FormControl('', [Validators.required]),
    artAuthor: new FormControl('', [Validators.required]),
    artDate: new FormControl('', [Validators.required]),
  });

  saveArticle() {
    this.article = this.articleForms.value;

    this.article.artDate = this.article.artDate.toString();

    this.articleService.createArticle(this.article).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Article saved successfully');
          this.articleForms.reset();
          this.router.navigate(['/inventory-articles']);
        } else {
          alert('Error saving Article');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error saving Article: ' + (error.message || 'Unknown error'));
      }
    );
  }


}
