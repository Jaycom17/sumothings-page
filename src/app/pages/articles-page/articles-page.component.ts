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

  articles: Article[] = []

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

  convertDate(date: string){
    return new Date(date).toDateString();
  }

}
