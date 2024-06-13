import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { ClientServiceService } from '../../services/clients/client-service.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

/**
 * Componente para la página de creación de clientes.
 */
@Component({
  selector: 'app-create-client-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-client-page.component.html',
  styleUrl: './create-client-page.component.css'
})
export class CreateClientPageComponent {

  constructor(private clientService: ClientServiceService) { }

  /**
   * Formulario para la creación de clientes.
   */
  clienForm: FormGroup = new FormGroup({
    cliFullName: new FormControl('', [Validators.required]),
    cliEmail: new FormControl('', [Validators.required, Validators.email]),
    cliPhone: new FormControl('', [Validators.required]),
    cliCedula: new FormControl('', [Validators.required]),
    cliNIT: new FormControl('', [Validators.required]),
    cliCompanyName: new FormControl('', [Validators.required]),
    cliCity: new FormControl('', [Validators.required]),
    cliPostalCode: new FormControl('', [Validators.required]),
    cliAddress: new FormControl('', [Validators.required]),
    cliPassword: new FormControl('', [Validators.required]),
  });

  /**
   * Guarda el cliente en el servidor.
   */
  saveClient() {
    const clientObject = this.clienForm.value;

    clientObject.cliCedula = clientObject.cliCedula.toString();
    clientObject.cliPhone = clientObject.cliPhone.toString();

    console.log(clientObject)

    this.clientService.createClient(clientObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Cliente guardado exitosamente');
          this.clienForm.reset();
        } else {
          alert('Error al guardar el cliente');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error al guardar el cliente: ' + (error.message || 'Error desconocido'));
      }
    );
  }

}
