import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarServiceService {
  private productsSubject = new BehaviorSubject<any[]>(this.getProductsFromLocalStorage());
  products$ = this.productsSubject.asObservable();

  constructor() {}

  /**
   * Obtiene los productos almacenados en el localStorage.
   * @returns Un array con los productos almacenados en el localStorage.
   */
  private getProductsFromLocalStorage(): any[] {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('shoppingCar') || '[]');
    } else {
      return [];
    }
  }

  /**
   * Agrega un producto al carrito de compras.
   * Si el producto ya existe en el carrito, se actualiza la cantidad.
   * @param product El producto a agregar al carrito.
   */
  addProductToShoppingCar(product: any) {
    let products = this.getProductsFromLocalStorage();
    if (products.some((p: any) => p.proID === product.proID)) {
      products = products.map((p: any) => {
        if (p.proID === product.proID) {
          p.quantity += product.quantity;
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

  /**
   * Remueve un producto del carrito de compras.
   * Si la cantidad del producto es mayor a 1, se reduce la cantidad en 1.
   * Si la cantidad del producto es igual a 1, se elimina completamente del carrito.
   * @param proID El ID del producto a remover del carrito.
   */
  removeProductFromShoppingCar(proID: string) {
    let products = this.getProductsFromLocalStorage();
    let product = products.find((product: any) => product.proID === proID);

    if (product.quantity > 1) {
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
