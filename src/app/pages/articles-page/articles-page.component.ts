import { Component, OnInit} from '@angular/core';
import { Article } from '../../interfaces/Article.interface';
import { ArticleServicesService } from '../../services/article/article-services.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
    selector: 'app-articles-page',
    standalone: true,
    templateUrl: './articles-page.component.html',
    styleUrl: './articles-page.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class ArticlesPageComponent implements OnInit {

  constructor(private articleService: ArticleServicesService) { }

  /**
   * Lista de artículos.
   */
  articles: Article[] = []

  /**
   * Copia de la lista de artículos.
   */
  articlesCopy: Article[] = [];


  ngOnInit(): void {
    /**
     * Obtiene la lista de artículos al inicializar el componente.
     */
    this.articleService.getArticles().subscribe((article: Article[]) => {
      this.articles = article;
      this.artclesCopy = article;
    });
  }

  /**
   * Copia de la lista de artículos.
   */
  artclesCopy = this.articles;

  /**
   * Filtra los artículos según el valor de búsqueda.
   * @param event El evento de entrada.
   */
  searchArticle(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.articles = this.artclesCopy.filter((article) => {
      return article.artTitle.toLowerCase().includes(searchValue.toLowerCase())|| article.artDate.toLowerCase().includes(searchValue.toLowerCase()) || article.artShortDescription.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  /**
   * Convierte una fecha en formato de cadena a un objeto de fecha.
   * @param date La fecha en formato de cadena.
   * @returns La fecha convertida en formato de cadena.
   */
  convertDate(date: string){
    return new Date(date).toDateString();
  }

}
