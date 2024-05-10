import { Component } from '@angular/core';

// Para el uso de iconos en login
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  // Iconos a usar
  public faUserCircle = faUserCircle;
  public faLock = faLock;
}
