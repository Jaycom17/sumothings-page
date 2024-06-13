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

/**
 * Componente para la página de creación de artículos.
 */
@Component({
  selector: 'app-create-article-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-article-page.component.html',
  styleUrl: './create-article-page.component.css'
})
export class CreateArticlePageComponent {

  /**
   * Constructor de la clase CreateArticlePageComponent.
   * @param articleService - Servicio para la gestión de artículos.
   * @param router - Router para la navegación entre páginas.
   */
  constructor(private articleService: ArticleServicesService, private router: Router) { }

  /**
   * Artículo actualmente en edición.
   */
  article: Article = {
    artID: '',
    artTitle: '',
    artContent: "",
    artShortDescription: '',
    artAuthor: "",
    artDate: ""
  }

  /**
   * Formulario para la creación de artículos.
   */
  articleForms: FormGroup = new FormGroup({
    artTitle: new FormControl('', [Validators.required]),
    artContent: new FormControl('', [Validators.required, Validators.email]),
    artShortDescription: new FormControl('', [Validators.required]),
    artAuthor: new FormControl('', [Validators.required]),
    artDate: new FormControl('', [Validators.required]),
  });

  /**
   * Guarda el artículo en el servidor.
   */
  saveArticle() {
    this.article = this.articleForms.value;

    this.article.artDate = this.article.artDate.toString();

    this.articleService.createArticle(this.article).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Artículo guardado exitosamente');
          this.articleForms.reset();
          this.router.navigate(['/inventory-articles']);
        } else {
          alert('Error al guardar el artículo');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error al guardar el artículo: ' + (error.message || 'Error desconocido'));
      }
    );
  }
}
