import { Component} from '@angular/core';
import { ArticlesPageComponent } from '../articles-page/articles-page.component';

@Component({
    selector: 'app-article-page',
    standalone: true,
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.css',
    imports: [ArticlesPageComponent]
})
export class ArticlePageComponent {
  articulo = {artImg: '', artNombre: "Esto es una prueba", artFecha: new Date(), artDescripcion: "Art des asasjhasklasj" }; 
  inputData($event:any){
    this.articulo=$event;
  }
}
