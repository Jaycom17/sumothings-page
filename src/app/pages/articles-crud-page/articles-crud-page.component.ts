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
  btn_estadoR:boolean=false;
  btn_estadoU:boolean=false;
  btn_estadoD:boolean=false;
  articulos = [
    { artImg: '', artNombre: 'SumoArt1', artFecha: new Date("05/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt2', artFecha: new Date("04/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt3', artFecha: new Date("03/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt4', artFecha: new Date("02/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt5', artFecha: new Date("01/02/2024"), artDescripcion: 'Art assaasas'}
  ]
  articulo = {artImg: '', artNombre: "Esto es una prueba", artFecha: new Date(), artDescripcion: "Art des asasjhasklasj" };
  cambiarEstado(){
    this.btn_estadoC=!this.btn_estadoC;
  }
  agregararticulo(nombre:string,fecha:string,descripcion:string){
    this.articulo.artImg;
    this.articulo.artNombre=nombre;
    this.articulo.artFecha=new Date(fecha);
    this.articulo.artDescripcion=descripcion;
    this.articulos.push(this.articulo);
    console.log(this.articulos.join)
  }
}
