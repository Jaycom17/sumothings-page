import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailServiceService } from '../../services/email/email-service.service';

/**
 * Componente de la página de contacto.
 */
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  constructor(private emailService: EmailServiceService) {}

  /**
   * Formulario de correo electrónico.
   */
  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  /**
   * Envía el correo electrónico.
   */
  sendEmail() {
    const email = this.emailForm.value;
    this.emailService.sendEmail(email).subscribe(
      (response) => {
        alert('Correo electrónico enviado exitosamente');
        this.emailForm.reset();
      },
      (error) => {
        alert('Error al enviar el correo electrónico');
      }
    );
  }
}
