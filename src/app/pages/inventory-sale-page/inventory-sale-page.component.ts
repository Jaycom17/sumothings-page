import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { Router } from '@angular/router';
import { SaleServiceService } from '../../services/sale/sale-service.service';

@Component({
  selector: 'app-inventory-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-sale-page.component.html',
  styleUrl: './inventory-sale-page.component.css'
})
export class InventorySalePageComponent implements OnInit{

  /**
   * Constructor de la clase InventorySalePageComponent.
   * @param router - El enrutador utilizado para la navegación.
   * @param saleService - El servicio utilizado para obtener las ventas.
   */
  constructor(private router: Router, private saleService: SaleServiceService) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene todas las ventas y las asigna a las propiedades sales y salesCopy.
   */
  ngOnInit(): void {
    this.saleService.getAllSales().subscribe(
      (res: any) => {
        this.sales = res;
        this.salesCopy = res;
      }
    )
  }

  /**
   * Ordena las ventas por fecha.
   */
  orderByDate(){
    this.sales.sort((a:any, b:any) => a.salDate.localeCompare(b.salDate))
  }

  /**
   * Ordena las ventas por producto.
   */
  orderByProduct(){
    this.sales.sort((a:any, b:any) => a.proID.localeCompare(b.proID))
  }

  /**
   * Elimina una venta.
   * @param salID - El ID de la venta a eliminar.
   */
  deleteSale(salID: string){
    this.sales = this.sales.filter((sale:any) => sale.salID !== salID)
  }

  /**
   * Navega a la página de detalle de una venta.
   * @param salID - El ID de la venta a mostrar en detalle.
   */
  goToSaleDetail(salID: string){
    this.router.navigate(['/sale/', salID])
  }

  /**
   * Filtra las ventas por nombre de cliente o fecha de venta.
   * @param event - El evento de entrada.
   */
  searchSale(event: Event){
    const value = (event.target as HTMLInputElement).value.toLowerCase()
    this.sales = this.salesCopy.filter((sale:any) => sale.cliName.toLowerCase().includes(value)|| sale.salDate.includes(value));
  }

  /**
   * Calcula el impuesto total de una venta.
   * @param sale - La venta para la cual se calculará el impuesto.
   * @returns El impuesto total de la venta.
   */
  calculateTax(sale: any){
    return sale.reduce((acc: any, saleItem: any) => acc + (saleItem.salTaxes* saleItem.salProductUnits), 0)
  }

  /**
   * Calcula el total de una venta, incluyendo impuestos.
   * @param sale - La venta para la cual se calculará el total.
   * @returns El total de la venta.
   */
  calculateTotal(sale: any){
    let price = sale.reduce((acc: any, saleItem: any) => acc + (saleItem.salPrice * saleItem.salProductUnits), 0)

    return price + this.calculateTax(sale)
  }

  sales:any = []

  salesCopy = this.sales;
}
