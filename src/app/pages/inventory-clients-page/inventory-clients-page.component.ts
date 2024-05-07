import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-inventory-clients-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-clients-page.component.html',
  styleUrl: './inventory-clients-page.component.css'
})
export class InventoryClientsPageComponent {
  
    orderByName(){
      this.clients.sort((a, b) => a.cliFullName.localeCompare(b.cliFullName));
    }
  
    orderByCedula(){
      this.clients.sort((a, b) => a.cliCedula.localeCompare(b.cliCedula));
    }
  
    clients = [    
      {cliCedula: '2', cliFullName: 'Carlos Perez', cliEmail: 'carlos@algo.com', cliPhone: '132234324234'},
      {cliCedula: '1', cliFullName: 'Arnulfo Perez', cliEmail: 'arnulfo@algo.com', cliPhone: '132234324234', cliNit: '1234'},
    ]
}
