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
  
}
