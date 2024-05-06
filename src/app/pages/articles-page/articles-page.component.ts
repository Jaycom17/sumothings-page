import { Component} from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ArticlePageComponent } from "../article-page/article-page.component";


@Component({
    selector: 'app-articles-page',
    standalone: true,
    templateUrl: './articles-page.component.html',
    styleUrl: './articles-page.component.css',
    imports: [ArticlePageComponent,CommonModule, NgIf, NgFor]
})
export class ArticlesPageComponent {
  btnEstadoC:boolean=false;
  btnEstadoF:boolean=true;
  articulos = [
    { artImg: '', artNombre: 'SumoArt1', artFecha: new Date("05/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt2', artFecha: new Date("04/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt3', artFecha: new Date("03/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt4', artFecha: new Date("02/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt5', artFecha: new Date("01/02/2024"), artDescripcion: 'Art assaasas'}
  ]
  articuloS = {artImg: '', artNombre: 'Esto es una prueba', artFecha: new Date(), artDescripcion: 'Art des asasjhasklasj' };

  articuloActual(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.cambiarEstado();
    this.articuloS=articulo;
  }
  cambiarEstado(){
    this.btnEstadoC=!this.btnEstadoC;
    this.btnEstadoF=!this.btnEstadoF;
  }

}
