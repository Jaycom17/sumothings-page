import { Component } from '@angular/core';
import { addThousandSeparators } from '../../utils/numbers';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  products = [
    { proID: '1', proName: 'Product 1 beatiful placce to be i dont know but could bu so focking long', proPrice: '100', proImage: 'https://via.placeholder.com/150'},
    { proID: '2', proName: 'Product 2', proPrice: '99000000', proImage: 'https://via.placeholder.com/150'},
    { proID: '3', proName: 'Product 3', proPrice: '300', proImage: 'https://via.placeholder.com/150'},
    { proID: '4', proName: 'Product 4', proPrice: '400', proImage: 'https://via.placeholder.com/150'},
    { proID: '5', proName: 'Product 5', proPrice: '500', proImage: 'https://via.placeholder.com/150'},
    { proID: '6', proName: 'Product 6', proPrice: '600', proImage: 'https://via.placeholder.com/150'},
    { proID: '7', proName: 'Product 7', proPrice: '700', proImage: 'https://via.placeholder.com/150'},
    { proID: '8', proName: 'Product 8', proPrice: '800', proImage: 'https://via.placeholder.com/150'},
    { proID: '9', proName: 'Product 9', proPrice: '900', proImage: 'https://via.placeholder.com/150'},
    { proID: '10', proName: 'Product 10', proPrice: '1000', proImage: 'https://via.placeholder.com/150'},
  ]

  quitProduct(proID: string) {
    this.products = this.products.filter(product => product.proID !== proID);
  }

  getTotal() {
    return this.products.reduce((acc, product) => acc + parseInt(product.proPrice), 0);
  }

  convertToCurrency(num: string | number) {
    return addThousandSeparators(num);
  }
}
