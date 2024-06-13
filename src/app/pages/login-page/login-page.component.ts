import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'; 
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http'; 
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public faUserCircle = faUserCircle;
  public faLock = faLock;

  constructor(private authService: AuthServiceService, private router: Router) { }

  user: any = {
    email: '',
    password: ''
  }

  loginForms: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  loginClient() {
    this.user = this.loginForms.value;

    this.authService.loginClient(this.user).subscribe(
      (response: any) => {
        this.loginForms.reset();
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle error here, for example:
        alert('Error logging in: ' + (error.message || 'Unknown error'));
      }
    );
  }

  // Manejo de los campos oblitarorios
  isFormValid() {
    return this.loginForms.valid;
  }
}