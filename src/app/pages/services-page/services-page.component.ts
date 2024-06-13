import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

/**
 * Componente de la página de servicios.
 */
@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  /**
   * Lista de servicios.
   */
  services = [
    {
      /**
       * URL de la imagen del servicio.
       */
      serImage: 'https://cdn.pixabay.com/photo/2019/01/08/10/58/smart-home-3920905_1280.jpg',
      /**
       * Título del servicio.
       */
      serTitle: 'Domótica',
      /**
       * Descripción del servicio.
       */
      serDescripcion:
        'Ofrecemos objetos inteligentes fáciles de instalar y utilizar, para que usted invierta su tiempo en lo importante.',
    },
    {
      serImage: 'https://cdn.pixabay.com/photo/2018/09/04/10/35/smart-home-3653452_1280.jpg',
      serTitle: 'Entornos Inteligentes IoT',
      serDescripcion:
        'Creamos entornos de objetos inteligentes que ofrecen servicios ajustados a las necesidades de las personas.',
    },
    {
      serImage: 'https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_1280.jpg',
      serTitle: 'Servicios de Datos IoT',
      serDescripcion:
        'Proveemos servicios de datos en tiempo real para el acceso a los objetos inteligentes.',
    },
    {
      serImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/18/laptop-2589420_1280.jpg',
      serTitle: 'Desarrollo Software Interoperable M2M',
      serDescripcion:
        'Desarrollamos software para dotar de inteligencia a tus dispositivos, incluso si son de otros fabricantes.',
    },
    {
      serImage: 'https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg',
      serTitle: 'Consultoria IT',
      serDescripcion:
        'Realizamos consultoría en Internet de las Cosas y desarrollo de objetos inteligentes.',
    },
    {
      serImage: 'https://cdn.pixabay.com/photo/2015/12/03/22/15/tablet-1075790_960_720.jpg',
      serTitle: 'Interoperabilidad semántica',
      serDescripcion:
        'Incorporamos objetos inteligentes que brindan información de tu entorno.',
    },
  ];
}
