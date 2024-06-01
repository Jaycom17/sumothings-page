import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/Article.interface';
import { ArticleServicesService } from '../../services/article/article-services.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-article-page',
    standalone: true,
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class ArticlePageComponent implements OnInit{
  artID: string | any = '';
  article:Article = {
    artID: 'asuydgw', artTitle: 'SumoArt1', artContent: "lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih", artShortDescription: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih', artAuthor: "Juanito", artDate: "05/02/2024"
  }

  constructor(private route: ActivatedRoute, private articleService: ArticleServicesService) { }

  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.artID = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.artID).subscribe((article: Article) => {
      this.article = article;
    });
  }
}
