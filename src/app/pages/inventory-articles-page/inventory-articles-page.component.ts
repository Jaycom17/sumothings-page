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

  articles: Article[] = [
    { artID: 'asuydgw', artTitle: 'SumoArt1', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"},
    { artID: 'asckdv', artTitle: 'SumoArt2', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"},
    { artID: 'ewfwcv', artTitle: 'SumoArt3', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"},
    { artID: '3f34', artTitle: 'SumoArt4', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"},
    { artID: '234fgr', artTitle: 'SumoArt5', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"}
  ]

  articlesCopy: Article[] = [];


  ngOnInit(): void {
    this.articleService.getArticles().subscribe((article: Article[]) => {
      this.articles = article;
      this.artclesCopy = article;
    });
  }

  artclesCopy = this.articles;

  searchArticle(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.articles = this.artclesCopy.filter((article) => {
      return article.artTitle.toLowerCase().includes(searchValue.toLowerCase())|| article.artDate.toLowerCase().includes(searchValue.toLowerCase()) || article.artShortDescription.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  orderByDate(){
    this.articles.sort((a, b) => a.artDate.localeCompare(b.artDate))
  }

  orderByTitle(){
    this.articles.sort((a, b) => a.artTitle.localeCompare(b.artTitle))
  }

  orderByAuthor(){
    this.articles.sort((a, b) => a.artAuthor.localeCompare(b.artAuthor))
  }
  
  deleteArticle(artID: string|any){
    const confirmDelete = confirm('Are you sure you want to delete this article?');

    if(!confirmDelete) return;

    this.articles = this.articles.filter(article => article.artID !== artID);
    this.artclesCopy = this.artclesCopy.filter(article => article.artID !== artID);
    this.articleService.deleteArticle(artID).subscribe();
  }

}

