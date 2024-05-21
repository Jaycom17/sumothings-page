import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-sale-page.component.html',
  styleUrl: './inventory-sale-page.component.css'
})
export class InventorySalePageComponent {

  constructor(private router: Router) {}


  orderByDate(){
    this.sales.sort((a, b) => a.salDate.localeCompare(b.salDate))
  }

  orderByProduct(){
    this.sales.sort((a, b) => a.proID.localeCompare(b.proID))
  }

  deleteSale(salID: string){
    this.sales = this.sales.filter(sale => sale.salID !== salID)
  }

  goToSaleDetail(salID: string){
    this.router.navigate(['/sale/', salID])
  }

  sales = [
    { salID: '2', proID: '2', cliName: 'Juan Carlos Perez', salDate: '2021-01-02', salProductUnits: '20', salPrice: '2000', salTaxes: '320', salTotal: '2320' },
    { salID: '1', proID: '1', cliName: 'Juan Camilo', salDate: '2021-01-01', salProductUnits: '10', salPrice: '1000', salTaxes: '160', salTotal: '1160' },
    { salID: '3', proID: '3', cliName: 'Juan Hurtado', salDate: '2021-01-03', salProductUnits: '30', salPrice: '3000', salTaxes: '480', salTotal: '3480' },
    { salID: '5', proID: '5', cliName: 'Juan Narvaez', salDate: '2021-01-05', salProductUnits: '50', salPrice: '5000', salTaxes: '800', salTotal: '5800' },
    { salID: '4', proID: '4', cliName: 'Juan Sotelo', salDate: '2021-01-04', salProductUnits: '40', salPrice: '4000', salTaxes: '640', salTotal: '4640' },
  ]
}
