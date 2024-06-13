import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DealerServicesService } from '../../services/dealer/dealer-services.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

/**
 * Componente para la creación de un distribuidor.
 */
@Component({
  selector: 'app-create-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-dealer-page.component.html',
  styleUrl: './create-dealer-page.component.css',
})
export class CreateDealerPageComponent {
  /**
   * Constructor de la clase CreateDealerPageComponent.
   * @param dealerService - Servicio para manejar las operaciones relacionadas con los distribuidores.
   * @param router - Router para la navegación entre páginas.
   */
  constructor(private dealerService: DealerServicesService, private router: Router) {}

  /**
   * Objeto que representa los datos del distribuidor.
   */
  dealerObject = {
    deaFullName: '',
    deaEmail: '',
    deaPhone: '',
    deaCedula: '',
  };

  /**
   * Formulario para la validación de los datos del distribuidor.
   */
  dealerForms: FormGroup = new FormGroup({
    deaFullName: new FormControl('', [Validators.required]),
    deaEmail: new FormControl('', [Validators.required, Validators.email]),
    deaPhone: new FormControl('', [Validators.required]),
    deaCedula: new FormControl('', [Validators.required]),
  });

  /**
   * Método para guardar los datos del distribuidor.
   */
  saveDealer() {
    this.dealerObject = this.dealerForms.value;

    this.dealerObject.deaCedula = this.dealerObject.deaCedula.toString();
    this.dealerObject.deaPhone = this.dealerObject.deaPhone.toString();

    this.dealerService.saveDealer(this.dealerObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Distribuidor guardado exitosamente');
          this.dealerForms.reset();
          this.router.navigate(['/inventory-dealer']);
        } else {
          alert('Error al guardar el distribuidor');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error al guardar el distribuidor: ' + (error.message || 'Error desconocido'));
      }
    );
  } 
}
