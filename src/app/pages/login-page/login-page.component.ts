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

/**
 * Componente para la página de inicio de sesión.
 */
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  /**
   * Icono de usuario.
   */
  public faUserCircle = faUserCircle;
  /**
   * Icono de candado.
   */
  public faLock = faLock;

  constructor(private authService: AuthServiceService, private router: Router) { }

  /**
   * Objeto que representa al usuario.
   */
  user: any = {
    cliEmail: '',
    cliPpassword: ''
  }

  /**
   * Formulario de inicio de sesión.
   */
  loginForms: FormGroup = new FormGroup({
    cliEmail: new FormControl('', [Validators.required, Validators.email]),
    cliPassword: new FormControl('', [Validators.required]),
  });

  /**
   * Realiza el inicio de sesión del cliente.
   */
  loginClient() {
    this.user = this.loginForms.value;

    this.authService.loginClient(this.user).subscribe(
      (response: any) => {
        this.loginForms.reset();
        this.router.navigate(['/']);
      },
      (error) => {
        // Manejar el error aquí, por ejemplo:
        alert('Usuario o contraseña incorrectos, por favor intente de nuevo');
      }
    );
  }

  /**
   * Verifica si el formulario es válido.
   * @returns true si el formulario es válido, de lo contrario false.
   */
  isFormValid() {
    return this.loginForms.valid;
  }
}