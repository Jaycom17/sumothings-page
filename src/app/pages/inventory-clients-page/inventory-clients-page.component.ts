import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { ClientServiceService } from '../../services/clients/client-service.service';

@Component({
  selector: 'app-inventory-clients-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-clients-page.component.html',
  styleUrl: './inventory-clients-page.component.css'
})
export class InventoryClientsPageComponent implements OnInit {
  clients: any= [];

  clientsCopy: any = [];
  constructor(private clientService: ClientServiceService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      (res: any) => {
        this.clients = res;
        this.clientsCopy = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

    orderByName(){
      this.clients.sort((a:any, b:any) => a.cliFullName.localeCompare(b.cliFullName));
    }
  
    orderByCedula(){
      this.clients.sort((a:any, b:any) => a.cliCedula.localeCompare(b.cliCedula));
    }

    searchClient(event: Event){
      const search = (event.target as HTMLInputElement).value;
      this.clients = this.clientsCopy.filter((client:any) => client.cliFullName.toLowerCase().includes(search)||client.cliCedula.toLowerCase().includes(search)||client.cliNit?.toLowerCase().includes(search));
    }
  
    deleteClient(clientId: string){
      let check = confirm('Are you sure you want to delete this client?');

      if(!check){
        return;
      }

      this.clientService.deleteClient(clientId).subscribe(
        (res: any) => {
          this.clients = this.clients.filter((client:any) => client.cliId !== clientId);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    
}
