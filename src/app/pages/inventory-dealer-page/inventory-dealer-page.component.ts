import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-inventory-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-dealer-page.component.html',
  styleUrl: './inventory-dealer-page.component.css'
})
export class InventoryDealerPageComponent {

  orderByName(){
    this.dealers.sort((a, b) => a.deaFullName.localeCompare(b.deaFullName));
  }

  orderByCedula(){
    this.dealers.sort((a, b) => a.deaCedula.localeCompare(b.deaCedula));
  }

  deleteDealer(deaCedula: string){
    this.dealers = this.dealers.filter(dealer => dealer.deaCedula !== deaCedula);
  }

  dealers = [    
    {deaCedula: '2', deaFullName: 'Carlos Perez', deaEmail: 'carlos@algo.com', deaPhone: '132234324234'},
    {deaCedula: '1', deaFullName: 'Arnulfo Perez', deaEmail: 'arnulfo@algo.com', deaPhone: '132234324234'},
    {deaCedula: '3', deaFullName: 'Juan Perez', deaEmail: 'juan@algo.com', deaPhone: '132234324234'},
  ]
}
