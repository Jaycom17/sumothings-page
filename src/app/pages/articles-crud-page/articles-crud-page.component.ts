import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles-crud-page',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, HttpClientModule],
  templateUrl: './articles-crud-page.component.html',
  styleUrl: './articles-crud-page.component.css'
})

export class ArticlesCrudPageComponent {
  constructor(private http: HttpClient){ }
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
  
  selectedFile:File | any = null;

  imgSelect(event:any){
    console.log(event);
    this.selectedFile= <File>event.target.file[0];
  }
  HttpPost(){
    const fd = new FormData()
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post('',fd).subscribe(res =>{
      console.log(res);
    });
    /* file upload rest api cloud https://youtu.be/YkvqLNcJz3Y?feature=shared */
  }
  getDateTostring(date:Date):string{
    let dia=date.getDay();
    let mes=date.getMonth();
    let anio=date.getFullYear();
    let diaS:string=""+dia;
    let mesS:string=""+mes;
    if(dia<10){
      diaS="0"+dia;
    }
    if(mes<10){
      mesS="0"+mes;
    }
    return anio+"-"+mesS+"-"+diaS;
  }
  cambiarEstadoC(){
    this.articuloR=this.articuloAux;
    this.btn_estadoC=!this.btn_estadoC;
    this.btn_estadoR=!this.btn_estadoR;
    this.tag = this.estado.Crear;
  }
  cambiarEstadoC2(artImg:string, artNombre:string, artFecha:string, artDescripcion:string){
    if((artNombre.length==0)||(artFecha.length==0)||(artDescripcion.length==0)){
      return;
    }
    this.articuloR.artImg=artImg;
    this.articuloR.artNombre=artNombre;
    this.articuloR.artFecha=new Date(artFecha);
    this.articuloR.artDescripcion=artDescripcion;
    if(this.tag==this.estado.Crear){
      this.agregarArticulo(this.articuloR);
    }else{
      this.editarArticulo(this.articuloR);
    }
    this.btn_estadoC=!this.btn_estadoC;
    this.btn_estadoR=!this.btn_estadoR;
    this.tag = this.estado.Crear;
  }
  cambiarEstadoU(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.btn_estadoC=!this.btn_estadoC;
    this.btn_estadoR=!this.btn_estadoR;
    this.articuloR=articulo;
    this.index=this.articulos.indexOf(articulo);
    this.tag=this.estado.Editar;
  }
  eliminarArticulo(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.index=this.articulos.indexOf(articulo);
    this.articulos.splice(this.index,1);
    console.log(this.articulos.join());
  }
  agregarArticulo(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.articulos.push(articulo);
    console.log(this.articulos.join());
  }
  editarArticulo(articulo:{artImg:string, artNombre:string, artFecha:Date, artDescripcion:string}){
    this.articulos.splice(this.index,1,articulo);
    console.log(this.articulos.join());
  }
}
