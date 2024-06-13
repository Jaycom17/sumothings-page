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

@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.css'
})
export class AdminLoginPageComponent {
  public faUserCircle = faUserCircle;
  public faLock = faLock;


  constructor(private authService: AuthServiceService, private router: Router) { }

  user: any = {
    admEmail: '',
    admPassword: ''
  }

  loginForms: FormGroup = new FormGroup({
    admEmail: new FormControl('', [Validators.required]),
    admPassword: new FormControl('', [Validators.required]),
  });

  loginAdmin() {
    this.user = this.loginForms.value;

    this.authService.loginAdmin(this.user).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.loginForms.reset();
          this.router.navigate(['/inventory']);
        } else {
          alert('Error logging in');
        }
      },
      (error) => {
        // Handle error here, for example:
        alert('Error logging in: ' + (error.message || 'Unknown error'));
      }
    );
  }
}
