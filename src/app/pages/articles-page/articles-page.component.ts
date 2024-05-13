import { Component} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
    selector: 'app-articles-page',
    standalone: true,
    templateUrl: './articles-page.component.html',
    styleUrl: './articles-page.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class ArticlesPageComponent {
  articulos = [
    { artID: 'asuydgw', artNombre: 'SumoArt1', artFecha: "05/02/2024", artDescripcion: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih'},
    { artID: 'asckdv', artNombre: 'SumoArt2', artFecha: "04/02/2024", artDescripcion: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih'},
    { artID: 'ewfwcv', artNombre: 'SumoArt3', artFecha: "03/02/2024", artDescripcion: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih'},
    { artID: '3f34', artNombre: 'SumoArt4', artFecha: "02/02/2024", artDescripcion: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih'},
    { artID: '234fgr', artNombre: 'SumoArt5', artFecha: "01/02/2024", artDescripcion: 'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih'}
  ]

}
