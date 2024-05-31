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

}
