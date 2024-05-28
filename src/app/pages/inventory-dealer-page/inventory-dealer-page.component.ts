import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { Dealer } from '../../interfaces/Dealer.interface';
import { DealerServicesService } from '../../services/dealer/dealer-services.service';

@Component({
  selector: 'app-inventory-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-dealer-page.component.html',
  styleUrl: './inventory-dealer-page.component.css'
})
export class InventoryDealerPageComponent implements OnInit{

  constructor(private dealerService: DealerServicesService) { }

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

  deleteDealer(deaID: string){
    this.dealers = this.dealers.filter(dealer => dealer.deaID !== deaID);
  }
}
