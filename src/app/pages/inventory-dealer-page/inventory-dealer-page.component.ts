import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { Dealer } from '../../interfaces/Dealer.interface';
import { DealerServicesService } from '../../services/dealer/dealer-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-dealer-page.component.html',
  styleUrl: './inventory-dealer-page.component.css'
})
export class InventoryDealerPageComponent implements OnInit{

  constructor(private dealerService: DealerServicesService, private router: Router) { }

  dealers: Dealer[] = [];

  dealersCopy: Dealer[] = [];

  ngOnInit(): void {
    this.dealerService.getDealers().subscribe((dealers: Dealer[]) => {
      this.dealers = dealers;
      this.dealersCopy = dealers;
    });
  }

  searchDealer(event: Event){
    const searchValue = (event.target as HTMLInputElement).value;
    this.dealers = this.dealersCopy.filter(dealer => dealer.deaFullName.toLowerCase().includes(searchValue.toLowerCase()) || dealer.deaCedula.includes(searchValue));
  }

  orderByName(){
    this.dealers.sort((a, b) => a.deaFullName.localeCompare(b.deaFullName));
  }

  orderByCedula(){
    this.dealers.sort((a, b) => a.deaCedula.localeCompare(b.deaCedula));
  }

  deleteDealer(deaID: string | any){
    const confirmDelete = confirm('Are you sure you want to delete this dealer?');

    if(!confirmDelete) return;

    this.dealers = this.dealers.filter(dealer => dealer.deaID !== deaID);
    this.dealersCopy = this.dealersCopy.filter(dealer => dealer.deaID !== deaID);
    this.dealerService.deleteDealer(deaID).subscribe();
  }

  goToUpdate(deaID: string | any){
    this.router.navigate([`update-dealer/${deaID}`]);
  }
}
