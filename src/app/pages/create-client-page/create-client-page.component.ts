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

@Component({
  selector: 'app-create-client-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-client-page.component.html',
  styleUrl: './create-client-page.component.css'
})
export class CreateClientPageComponent {

  constructor(private clientService: ClientServiceService) { }

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

  saveClient() {
    const clientObject = this.clienForm.value;

    clientObject.cliCedula = clientObject.cliCedula.toString();
    clientObject.cliPhone = clientObject.cliPhone.toString();

    console.log(clientObject)

    this.clientService.createClient(clientObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Client saved successfully');
          this.clienForm.reset();
        } else {
          alert('Error saving client');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error saving client: ' + (error.message || 'Unknown error'));
      }
    );
  }

}
