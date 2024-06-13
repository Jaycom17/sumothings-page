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

  constructor(private router: Router, private saleService: SaleServiceService) {}

  ngOnInit(): void {
    this.saleService.getAllSales().subscribe(
      (res: any) => {
        this.sales = res;
        this.salesCopy = res;
      }
    )
  }

  orderByDate(){
    this.sales.sort((a:any, b:any) => a.salDate.localeCompare(b.salDate))
  }

  orderByProduct(){
    this.sales.sort((a:any, b:any) => a.proID.localeCompare(b.proID))
  }

  deleteSale(salID: string){
    this.sales = this.sales.filter((sale:any) => sale.salID !== salID)
  }

  goToSaleDetail(salID: string){
    this.router.navigate(['/sale/', salID])
  }

  searchSale(event: Event){
    const value = (event.target as HTMLInputElement).value.toLowerCase()
    this.sales = this.salesCopy.filter((sale:any) => sale.cliName.toLowerCase().includes(value)|| sale.salDate.includes(value));
  }

  calculateTax(sale: any){
    return sale.reduce((acc: any, saleItem: any) => acc + (saleItem.salTaxes* saleItem.salProductUnits), 0)
  }

  calculateTotal(sale: any){
    let price = sale.reduce((acc: any, saleItem: any) => acc + (saleItem.salPrice * saleItem.salProductUnits), 0)

    return price + this.calculateTax(sale)
  }

  sales:any = []

  salesCopy = this.sales;
}
