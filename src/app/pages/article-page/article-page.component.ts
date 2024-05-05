import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-article-page',
    standalone: true,
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.css',
    imports: []
})
export class ArticlePageComponent {
  @Input() articuloI?:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string};
  articulo = {artImg: '', artNombre: 'Esto es una prueba', artFecha: new Date(), artDescripcion: 'Art des asasjhasklasj' };
  
  cambiarArt():{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}{
    if(this.articuloI!=null){
      this.articulo=this.articuloI;
    }
    return this.articulo;
  }
  
}
