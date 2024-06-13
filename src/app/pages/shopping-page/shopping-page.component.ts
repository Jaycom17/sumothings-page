import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { ShoppingServiceService } from '../../services/shopping/shopping-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './shopping-page.component.html',
  styleUrl: './shopping-page.component.css'
})
export class ShoppingPageComponent implements OnInit{

  constructor(private shoppingService: ShoppingServiceService, private route: ActivatedRoute) { }

  receipt: any = {};

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene el ID del recibo desde la ruta y realiza una llamada al servicio de compras para obtener los detalles del recibo.
   */
  ngOnInit(): void {
    let shoReciept: string | any = this.route.snapshot.paramMap.get('id');
    console.log(shoReciept)
    this.shoppingService.getShoppingById(shoReciept).subscribe(
      (res: any) => {
        this.receipt = res;
        console.log(res)
      }
    )
  }

  /**
   * Método que calcula el subtotal de los productos en el recibo.
   * @returns El subtotal de los productos en el recibo.
   */
  getSubtotal(): number {
    return this.receipt.products.reduce((acc: number, producto:any) => {
      return acc + producto.shoPrice * producto.shoProductUnits;
    }, 0);
  }

  /**
   * Método que calcula los impuestos totales de los productos en el recibo.
   * @returns Los impuestos totales de los productos en el recibo.
   */
  getTaxes(): number {
    return this.receipt.products.reduce((acc: number, producto:any) => {
      return acc + producto.shoProductUnits * producto.shoTaxes;
    }, 0);
  }
}
