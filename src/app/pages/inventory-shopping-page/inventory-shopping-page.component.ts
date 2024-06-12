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

  ngOnInit(): void {
    this.shoppingService.getAllShopping().subscribe(
      (res: any) => {
        this.shoppings = res;
        this.shoppingsCopy = res;
      }
    )
  }

  orderByDate(){
    this.shoppings.sort((a, b) => a.shoDate.localeCompare(b.shoDate))
  }

  deleteShopping(shoID: string){
    this.shoppings = this.shoppings.filter(shopping => shopping.shoReciept !== shoID)
  }

  constructor(private router: Router, private shoppingService: ShoppingServiceService) { }

  goToShoppingDetail(shoID: string){
    this.router.navigate(['/shopping/', shoID])
  }

  calculateTax(shopping: any){
    return shopping.reduce((acc: any, shoppingItem: any) => acc + (shoppingItem.shoTaxes* shoppingItem.shoProductUnits), 0)
  }

  calculateTotal(shopping: any){
    let price = shopping.reduce((acc: any, shoppingItem: any) => acc + (shoppingItem.shoPrice * shoppingItem.shoProductUnits), 0)

    return price + this.calculateTax(shopping)
  }

  searchShopping(event: Event){
    const value = (event.target as HTMLInputElement).value.toLowerCase()
    this.shoppings = this.shoppingsCopy.filter(shopping => shopping.deaName.toLowerCase().includes(value)|| shopping.shoDate.includes(value));
  }

}
