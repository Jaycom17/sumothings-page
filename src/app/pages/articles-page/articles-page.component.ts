import { Component , Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-articles-page',
    standalone: true,
    templateUrl: './articles-page.component.html',
    styleUrl: './articles-page.component.css',
    imports: []
})
export class ArticlesPageComponent {
  articulos = [
    { artImg: '', artNombre: 'SumoArt1', artFecha: new Date("05/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt2', artFecha: new Date("04/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt3', artFecha: new Date("03/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt4', artFecha: new Date("02/02/2024"), artDescripcion: 'Art assaasas'},
    { artImg: '', artNombre: 'SumoArt5', artFecha: new Date("01/02/2024"), artDescripcion: 'Art assaasas'}
  ]

  @Output() articuloEvent = new EventEmitter ();
  
  sendEvent(articulo:any){
    this.articuloEvent.emit(articulo);
  }

}
