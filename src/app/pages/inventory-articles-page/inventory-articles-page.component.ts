import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/Article.interface';
import { ArticleServicesService } from '../../services/article/article-services.service';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-inventory-articles-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-articles-page.component.html',
  styleUrl: './inventory-articles-page.component.css'
})
export class InventoryArticlesPageComponent implements OnInit {

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
   * Ordena los artículos por fecha.
   */
  orderByDate(){
    this.articles.sort((a, b) => a.artDate.localeCompare(b.artDate))
  }

  /**
   * Ordena los artículos por título.
   */
  orderByTitle(){
    this.articles.sort((a, b) => a.artTitle.localeCompare(b.artTitle))
  }

  /**
   * Ordena los artículos por autor.
   */
  orderByAuthor(){
    this.articles.sort((a, b) => a.artAuthor.localeCompare(b.artAuthor))
  }
  
  /**
   * Elimina un artículo.
   * @param artID El ID del artículo a eliminar.
   */
  deleteArticle(artID: string|any){
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar este artículo?');

    if(!confirmDelete) return;

    this.articles = this.articles.filter(article => article.artID !== artID);
    this.artclesCopy = this.artclesCopy.filter(article => article.artID !== artID);
    this.articleService.deleteArticle(artID).subscribe();
  }

}

