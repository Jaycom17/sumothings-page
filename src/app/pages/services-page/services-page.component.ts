import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  services = [
    {
      serImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      serTitle: 'SumoArt1',
      serDescripcion:
        'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih',
    },
    {
      serImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      serTitle: 'SumoArt2',
      serDescripcion:
        'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih',
    },
    {
      serImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      serTitle: 'SumoArt3',
      serDescripcion:
        'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih',
    },
    {
      serImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      serTitle: 'SumoArt4',
      serDescripcion:
        'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih',
    },
    {
      serImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      serTitle: 'SumoArt5',
      serDescripcion:
        'lorem ipaojnbcdaonj oa joefoifjoiswedhf uhriu hswoeufh hijwhe idugfh iuw fuwhiuwi9fuwhgi wih',
    },
  ];
}
