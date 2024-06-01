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

    searchClient(event: Event){
      const search = (event.target as HTMLInputElement).value;
      this.clients = this.clientsCopy.filter(client => client.cliFullName.toLowerCase().includes(search)||client.cliCedula.toLowerCase().includes(search)||client.cliNit?.toLowerCase().includes(search));
    }
  
    clients = [    
      {cliCedula: '2', cliFullName: 'Carlos Perez', cliEmail: 'carlos@algo.com', cliPhone: '132234324234'},
      {cliCedula: '1', cliFullName: 'Arnulfo Perez', cliEmail: 'arnulfo@algo.com', cliPhone: '132234324234', cliNit: '1234'},
    ]

    clientsCopy = this.clients;
}
