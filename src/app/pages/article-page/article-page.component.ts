import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/Article.interface';
import { ArticleServicesService } from '../../services/article/article-services.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

/**
 * Componente para la página de artículo.
 */
@Component({
    selector: 'app-article-page',
    standalone: true,
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class ArticlePageComponent implements OnInit{
  /**
   * Identificador del artículo.
   */
  artID: string | any = '';

  /**
   * Objeto que representa un artículo.
   */
  article: Article = {
    artID: 'asuydgw', artTitle: 'SumoArt1', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"
  }

  constructor(private route: ActivatedRoute, private articleService: ArticleServicesService) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.artID = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.artID).subscribe((article: Article) => {
      this.article = article;
    });
  }

  /**
   * Convierte una fecha en formato de cadena a un objeto Date.
   * @param date - La fecha en formato de cadena.
   * @returns La fecha convertida en formato de cadena.
   */
  convertDate(date: string){
    return new Date(date).toDateString();
  }
}
