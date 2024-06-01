import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.css'
})
export class AdminLoginPageComponent {
  public faUserCircle = faUserCircle;
  public faLock = faLock;

}
