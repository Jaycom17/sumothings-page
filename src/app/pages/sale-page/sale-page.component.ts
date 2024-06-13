import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { SaleServiceService } from '../../services/sale/sale-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './sale-page.component.html',
  styleUrl: './sale-page.component.css'
})
export class SalePageComponent implements OnInit{
  receipt:any = {};

  constructor(private saleService: SaleServiceService, private route: ActivatedRoute) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene el ID del recibo de venta de la ruta y llama al servicio para obtener los detalles de la venta.
   */
  ngOnInit(): void {
    let salReciept: string | any = this.route.snapshot.paramMap.get('id');
    console.log(salReciept)
    this.saleService.getSaleById(salReciept).subscribe(
      (res: any) => {
        this.receipt = res;
        console.log(res)
      }
    )
  }

  /**
   * Método que calcula el subtotal de la venta.
   * Suma el precio de venta por la cantidad de unidades de cada producto en el recibo.
   * @returns El subtotal de la venta.
   */
  getSubtotal(): number {
    return this.receipt.products.reduce((acc: number, producto:any) => {
      return acc + producto.salPrice * producto.salProductUnits;
    }, 0);
  }

  /**
   * Método que calcula los impuestos de la venta.
   * Suma los impuestos de cada producto en el recibo multiplicados por la cantidad de unidades.
   * @returns Los impuestos de la venta.
   */
  getTaxes(): number {
    return this.receipt.products.reduce((acc: number, producto:any) => {
      return acc + producto.salProductUnits * producto.salTaxes;
    }, 0);
  }
}
