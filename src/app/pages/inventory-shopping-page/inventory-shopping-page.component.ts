import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-shopping-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-shopping-page.component.html',
  styleUrl: './inventory-shopping-page.component.css'
})
export class InventoryShoppingPageComponent {

  orderByDate(){
    this.shoppings.sort((a, b) => a.shoDate.localeCompare(b.shoDate))
  }

  orderByProduct(){
    this.shoppings.sort((a, b) => a.proID.localeCompare(b.proID))
  }

  deleteShopping(shoID: string){
    this.shoppings = this.shoppings.filter(shopping => shopping.shoID !== shoID)
  }

  constructor(private router: Router) { }

  goToShoppingDetail(shoID: string){
    this.router.navigate(['/shopping/', shoID])
  }

  shoppings = [
    { shoID: '1', proID: '1', deaName: 'pedro', shoDate: '2021-01-01', shoProductUnits: '10', shoPrice: '1000', shoTaxes: '160', shoTotal: '1160' },
    { shoID: '2', proID: '2', deaName: 'pepe', shoDate: '2021-01-02', shoProductUnits: '20', shoPrice: '2000', shoTaxes: '320', shoTotal: '2320' },
    { shoID: '3', proID: '3', deaName: 'paco', shoDate: '2021-01-03', shoProductUnits: '30', shoPrice: '3000', shoTaxes: '480', shoTotal: '3480' },
    { shoID: '5', proID: '5', deaName: 'marco', shoDate: '2021-01-05', shoProductUnits: '50', shoPrice: '5000', shoTaxes: '800', shoTotal: '5800' },
    { shoID: '4', proID: '4', deaName: 'polo', shoDate: '2021-01-04', shoProductUnits: '40', shoPrice: '4000', shoTaxes: '640', shoTotal: '4640' },
  ];
}
