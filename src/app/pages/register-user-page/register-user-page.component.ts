import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/clients/client-service.service';
import { HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-register-user-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {
  constructor(private clientService: ClientServiceService, private router: Router) {}

    clientObject = {
      cliFullName: '',
      cliEmail: '',
      cliPassword: '',
      cliPhone: '',
      cliAddress: '',
      cliNIT: '',
      cliCompanyName: '',
      cliCity: '',
      cliPostalCode: '',
      cliCedula: '',
    };

    clientForms: FormGroup = new FormGroup({
      cliFullName: new FormControl ('', Validators.required),
      cliEmail: new FormControl ('', [Validators.required, Validators.email]),
      cliPassword: new FormControl ('', Validators.required),
      cliPhone: new FormControl ('', Validators.required),
      cliAddress: new FormControl ('', Validators.required),
      cliNIT: new FormControl ('', Validators.required),
      cliCompanyName: new FormControl ('', Validators.required),
      cliCity: new FormControl ('', Validators.required),
      cliPostalCode: new FormControl ('', Validators.required),
      cliCedula: new FormControl ('', Validators.required)
    })

  saveClient() {
    this.clientObject = this.clientForms.value;

    this.clientObject.cliPassword = this.clientObject.cliPassword.toString();
    this.clientObject.cliPhone = this.clientObject.cliPhone.toString();
    this.clientObject.cliNIT = this.clientObject.cliNIT.toString();
    this.clientObject.cliPostalCode = this.clientObject.cliPostalCode.toString();
    this.clientObject.cliCedula = this.clientObject.cliCedula.toString();

    this.clientService.createClient (this.clientObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Client saved successfully');
          this.clientForms.reset();
          this.router.navigate(['/login']);
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

  // Manejo de los campos oblitarorios
  isFormValid() {
    return this.clientForms.valid;
  }
}
