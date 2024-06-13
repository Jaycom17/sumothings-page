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

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene la lista de clientes y la asigna a las variables clients y clientsCopy.
   */
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

  /**
   * Ordena la lista de clientes por nombre.
   */
  orderByName(){
    this.clients.sort((a:any, b:any) => a.cliFullName.localeCompare(b.cliFullName));
  }

  /**
   * Ordena la lista de clientes por cédula.
   */
  orderByCedula(){
    this.clients.sort((a:any, b:any) => a.cliCedula.localeCompare(b.cliCedula));
  }

  /**
   * Filtra la lista de clientes según el valor de búsqueda.
   * @param event - El evento de entrada que desencadena la búsqueda.
   */
  searchClient(event: Event){
    const search = (event.target as HTMLInputElement).value;
    this.clients = this.clientsCopy.filter((client:any) => client.cliFullName.toLowerCase().includes(search)||client.cliCedula.toLowerCase().includes(search)||client.cliNit?.toLowerCase().includes(search));
  }

  /**
   * Elimina un cliente de la lista.
   * @param clientId - El ID del cliente a eliminar.
   */
  deleteClient(clientId: string){
    let check = confirm('¿Estás seguro de que deseas eliminar este cliente?');

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
