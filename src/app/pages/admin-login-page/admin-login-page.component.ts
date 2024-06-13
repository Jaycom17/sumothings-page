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
 * Componente para la página de inicio de sesión de administrador.
 */
@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.css'
})
export class AdminLoginPageComponent {
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
    admEmail: '',
    admPassword: ''
  }

  /**
   * Formulario de inicio de sesión.
   */
  loginForms: FormGroup = new FormGroup({
    admEmail: new FormControl('', [Validators.required, Validators.email]),
    admPassword: new FormControl('', [Validators.required]),
  });

  /**
   * Método para iniciar sesión como administrador.
   */
  loginAdmin() {
    this.user = this.loginForms.value;

    this.authService.loginAdmin(this.user).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.loginForms.reset();
          this.router.navigate(['/inventory']);
        } else {
          alert('Error al iniciar sesión');
        }
      },
      (error) => {
        // Manejar el error aquí, por ejemplo:
        alert('Usuario o contraseña incorrectos, por favor intente de nuevo');
      }
    );
  }
  
  /**
   * Verifica si el formulario es válido.
   * @returns `true` si el formulario es válido, de lo contrario `false`.
   */
  isFormValid() {
    return this.loginForms.valid;
  }
}
