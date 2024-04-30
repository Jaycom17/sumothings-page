import { Component } from '@angular/core';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ShoppingCartComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
