import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarServiceService {
  private productsSubject = new BehaviorSubject<any[]>(this.getProductsFromLocalStorage());
  products$ = this.productsSubject.asObservable();

  constructor() {}

  private getProductsFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem('shoppingCar') || '[]');
  }

  addProductToShoppingCar(product: any) {
    let products = this.getProductsFromLocalStorage();
    if (products.some((p: any) => p.proID === product.proID)) {
      products = products.map((p: any) => {
        if (p.proID === product.proID) {
          p.quantity+= product.quantity;
        }
        return p;
      });
      localStorage.setItem('shoppingCar', JSON.stringify(products));
      this.productsSubject.next(this.getProductsFromLocalStorage());
      return;
    }
    products.push(product);
    localStorage.setItem('shoppingCar', JSON.stringify(products));
    this.productsSubject.next(this.getProductsFromLocalStorage());
    return;
  }

  removeProductFromShoppingCar(proID: string) {
    let products = this.getProductsFromLocalStorage();
    let product = products.find((product: any) => product.proID === proID);

    if(product.quantity > 1) {
      products = products.map((p: any) => {
        if (p.proID === proID) {
          p.quantity--;
        }
        return p;
      });
      localStorage.setItem('shoppingCar', JSON.stringify(products));
      this.productsSubject.next(this.getProductsFromLocalStorage());
      return;
    }

    let newProducts = products.filter((product: any) => product.proID !== proID);
    localStorage.setItem('shoppingCar', JSON.stringify(newProducts));
    this.productsSubject.next(this.getProductsFromLocalStorage());
    return;
  }
}
