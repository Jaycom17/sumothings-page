import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-articles-crud-page',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './articles-crud-page.component.html',
  styleUrl: './articles-crud-page.component.css'
})

export class ArticlesCrudPageComponent {
  constructor(){ }
  btn_estadoC:boolean=false;
  btn_estadoR:boolean=true;
  btn_estadoU:boolean=false;
  btn_estadoD:boolean=false;
  articulos = [
    { artImg: '', artNombre: 'SumoArt1', artFecha: new Date("05/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt2', artFecha: new Date("04/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt3', artFecha: new Date("03/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt4', artFecha: new Date("02/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt5', artFecha: new Date("01/02/2024"), artDescripcion: 'Art assaasas'}
  ]
  index=0;
  articuloR = {artImg: '', artNombre: '', artFecha: new Date(), artDescripcion: '' };
  estado = {Crear: 'Crear',Editar: 'Editar'};
  tag = this.estado.Crear;
  cambiarEstadoC(){
    this.btn_estadoC=!this.btn_estadoC;
    this.btn_estadoR=!this.btn_estadoR;
    this.tag = this.estado.Crear;
  }
  cambiarEstadoU(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.btn_estadoC=!this.btn_estadoC;
    this.btn_estadoR=!this.btn_estadoR;
    this.articuloR=articulo;
    this.tag=this.estado.Editar;
  }

  agregararticulo(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.articulos.push(articulo);
    console.log(this.articulos.join)
  }
}
