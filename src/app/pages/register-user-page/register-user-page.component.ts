import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client/client.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-user-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-user-page.component.html',
  styleUrl: './register-user-page.component.css'
})
export class RegisterUserPageComponent {
  constructor(private clientService: ClientService, private router: Router) {}

    clientObject = {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      nit: '',
      company: '',
      city: '',
      postal: '',
      identification: '',
    };

    clientForms: FormGroup = new FormGroup({
      name: new FormControl ('', Validators.required),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', Validators.required),
      phone: new FormControl ('', Validators.required),
      address: new FormControl ('', Validators.required),
      nit: new FormControl ('', Validators.required),
      company: new FormControl ('', Validators.required),
      city: new FormControl ('', Validators.required),
      postal: new FormControl ('', Validators.required),
      identification: new FormControl ('', Validators.required)
    })

  saveClient() {
    this.clientObject = this.clientForms.value;

    this.clientObject.password = this.clientObject.password.toString();
    this.clientObject.phone = this.clientObject.phone.toString();
    this.clientObject.nit = this.clientObject.nit.toString();
    this.clientObject.postal = this.clientObject.postal.toString();
    this.clientObject.identification = this.clientObject.identification.toString();

    this.clientService.saveClient(this.clientObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Client saved successfully');
          this.clientForms.reset();
          this.router.navigate(['/']);
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
