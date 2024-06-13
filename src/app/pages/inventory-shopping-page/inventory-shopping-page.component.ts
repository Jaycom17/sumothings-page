import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { Router } from '@angular/router';
import { ShoppingServiceService } from '../../services/shopping/shopping-service.service';

@Component({
  selector: 'app-inventory-shopping-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-shopping-page.component.html',
  styleUrl: './inventory-shopping-page.component.css'
})
export class InventoryShoppingPageComponent implements OnInit{
  
  shoppings: any[] = [];

  shoppingsCopy: any[] = [];

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene todos los registros de compras y los asigna a las variables shoppings y shoppingsCopy.
   */
  ngOnInit(): void {
    this.shoppingService.getAllShopping().subscribe(
      (res: any) => {
        this.shoppings = res;
        this.shoppingsCopy = res;
      }
    )
  }

  /**
   * Método que ordena las compras por fecha en orden ascendente.
   */
  orderByDate(){
    this.shoppings.sort((a, b) => a.shoDate.localeCompare(b.shoDate))
  }

  /**
   * Método que elimina una compra según su ID de recibo.
   * @param shoID El ID de recibo de la compra a eliminar.
   */
  deleteShopping(shoID: string){
    this.shoppings = this.shoppings.filter(shopping => shopping.shoReciept !== shoID)
  }

  constructor(private router: Router, private shoppingService: ShoppingServiceService) { }

  /**
   * Método que navega a la página de detalle de una compra.
   * @param shoID El ID de recibo de la compra.
   */
  goToShoppingDetail(shoID: string){
    this.router.navigate(['/shopping/', shoID])
  }

  /**
   * Método que calcula el impuesto total de una compra.
   * @param shopping La compra de la cual se desea calcular el impuesto.
   * @returns El impuesto total de la compra.
   */
  calculateTax(shopping: any){
    return shopping.reduce((acc: any, shoppingItem: any) => acc + (shoppingItem.shoTaxes* shoppingItem.shoProductUnits), 0)
  }

  /**
   * Método que calcula el total de una compra, incluyendo impuestos.
   * @param shopping La compra de la cual se desea calcular el total.
   * @returns El total de la compra.
   */
  calculateTotal(shopping: any){
    let price = shopping.reduce((acc: any, shoppingItem: any) => acc + (shoppingItem.shoPrice * shoppingItem.shoProductUnits), 0)

    return price + this.calculateTax(shopping)
  }

  /**
   * Método que filtra las compras según un valor de búsqueda.
   * @param event El evento de entrada que desencadena la búsqueda.
   */
  searchShopping(event: Event){
    const value = (event.target as HTMLInputElement).value.toLowerCase()
    this.shoppings = this.shoppingsCopy.filter(shopping => shopping.deaName.toLowerCase().includes(value)|| shopping.shoDate.includes(value));
  }

}
