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

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene la lista de dealers y la asigna a las variables 'dealers' y 'dealersCopy'.
   */
  ngOnInit(): void {
    this.dealerService.getDealers().subscribe((dealers: Dealer[]) => {
      this.dealers = dealers;
      this.dealersCopy = dealers;
    });
  }

  /**
   * Método que realiza la búsqueda de un dealer en base al valor ingresado en el campo de búsqueda.
   * Actualiza la lista de dealers mostrados en función del resultado de la búsqueda.
   * @param event El evento de entrada que desencadena la búsqueda.
   */
  searchDealer(event: Event){
    const searchValue = (event.target as HTMLInputElement).value;
    this.dealers = this.dealersCopy.filter(dealer => dealer.deaFullName.toLowerCase().includes(searchValue.toLowerCase()) || dealer.deaCedula.includes(searchValue));
  }

  /**
   * Método que ordena la lista de dealers por nombre de forma ascendente.
   */
  orderByName(){
    this.dealers.sort((a, b) => a.deaFullName.localeCompare(b.deaFullName));
  }

  /**
   * Método que ordena la lista de dealers por cédula de forma ascendente.
   */
  orderByCedula(){
    this.dealers.sort((a, b) => a.deaCedula.localeCompare(b.deaCedula));
  }

  /**
   * Método que elimina un dealer de la lista.
   * Muestra una confirmación antes de eliminar el dealer.
   * @param deaID El ID del dealer a eliminar.
   */
  deleteDealer(deaID: string | any){
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este dealer?');

    if(!confirmDelete) return;

    this.dealers = this.dealers.filter(dealer => dealer.deaID !== deaID);
    this.dealersCopy = this.dealersCopy.filter(dealer => dealer.deaID !== deaID);
    this.dealerService.deleteDealer(deaID).subscribe();
  }

  /**
   * Método que redirige a la página de actualización de un dealer.
   * @param deaID El ID del dealer a actualizar.
   */
  goToUpdate(deaID: string | any){
    this.router.navigate([`update-dealer/${deaID}`]);
  }
}
