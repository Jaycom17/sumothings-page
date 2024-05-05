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
  articuloAux = {artImg: '', artNombre: '', artFecha: new Date(), artDescripcion: '' };
  articuloR = {artImg: '', artNombre: '', artFecha: new Date(), artDescripcion: '' };
  estado = {Crear: 'Crear',Editar: 'Editar'};
  tag = this.estado.Crear;
  updateIndex(){
    this.index=this.index+1;
  }
  cambiarEstadoC(){
    this.articuloR=this.articuloAux;
    this.btn_estadoC=!this.btn_estadoC;
    this.btn_estadoR=!this.btn_estadoR;
    this.tag = this.estado.Crear;
  }
  cambiarEstadoC2(artImg:string, artNombre:string, artFecha:string, artDescripcion:string){
    this.articuloR.artImg=artImg;
    this.articuloR.artNombre=artNombre;
    this.articuloR.artFecha=new Date(artFecha);
    this.articuloR.artDescripcion=artDescripcion;
    if(this.tag==this.estado.Crear){
      this.agregararticulo(this.articuloR);
    }else{
      this.editararticulo(this.articuloR);
    }
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
  editararticulo(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    console.log(this.articulos.join)
  }
}
