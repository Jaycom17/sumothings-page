import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  services = [
    { title: 'Domótica', description: 'Ofrecemos objetos inteligentes fáciles de instalar y utilizar, para que usted invierta su tiempo en lo importante.', icon: 'https://cdn-icons-png.flaticon.com/128/1165/1165103.png' },
    { title: 'Entornos Inteligentes IoT', description: 'Creamos entornos de objetos inteligentes que ofrecen servicios ajustados a las necesidades de las personas.', icon: 'https://cdn-icons-png.flaticon.com/128/2640/2640400.png'  },
    { title: 'Consultoria IT', description: 'Realizamos consultoría en Internet de las Cosas y desarrollo de objetos inteligentes.', icon: 'https://cdn-icons-png.flaticon.com/128/1469/1469884.png'  }
  ];

  team = [
    { name: 'Miguel Ángel Niño Zambrano', role: 'CEO', photo: 'https://sumothings.com/sumothings/wp-content/uploads/2022/04/personal_miguel.jpg' },
    { name: 'Omar Guzmán Alvarez', role: 'SOCIO', photo: 'https://sumothings.com/sumothings/wp-content/uploads/2022/04/La_sala__Marzo_2017-300x300.jpg' },
    { name: 'Julian Rojas Bolaños', role: 'SOCIO', photo: 'https://sumothings.com/sumothings/wp-content/uploads/2022/04/photo_2022-04-26_16-40-38.jpg' },
    { name: 'Andrea Pabón Guerrero', role: 'SOCIO', photo: 'https://sumothings.com/sumothings/wp-content/uploads/2022/04/photo_2022-03-19_23-48-26.jpg' }
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
  
}
