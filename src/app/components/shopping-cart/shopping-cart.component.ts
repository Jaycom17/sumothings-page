import { Component, OnInit, OnDestroy } from '@angular/core';
import { addThousandSeparators } from '../../utils/numbers';
import { ShoppingCarServiceService } from '../../services/shoppingCar/shopping-car-service.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  products: any[] = [];
  private subscription: any;

  constructor(private shoppingCarService: ShoppingCarServiceService) {}

  ngOnInit() {
    this.subscription = this.shoppingCarService.products$.subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  quitProduct(proID: string) {
    this.shoppingCarService.removeProductFromShoppingCar(proID);
  }

  getTotal() {
    return this.products.reduce((acc: number, product: any) => acc + (parseInt(product.proSellPrice) * product.quantity), 0);
  }

  convertToCurrency(num: string | number) {
    return addThousandSeparators(num);
  }
}
