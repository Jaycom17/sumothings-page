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

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  constructor(private emailService: EmailServiceService) {}

  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  sendEmail() {
    const email = this.emailForm.value;
    this.emailService.sendEmail(email).subscribe(
      (response) => {
        alert('Email sent successfully');
        this.emailForm.reset();
      },
      (error) => {
        alert('Error sending email');
      }
    );
  }
}
