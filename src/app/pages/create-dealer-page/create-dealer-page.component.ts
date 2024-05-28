import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DealerServicesService } from '../../services/dealer/dealer-services.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-dealer-page.component.html',
  styleUrl: './create-dealer-page.component.css',
})
export class CreateDealerPageComponent {
  constructor(private dealerService: DealerServicesService, private router: Router) {}

  dealerObject = {
    deaFullName: '',
    deaEmail: '',
    deaPhone: '',
    deaCedula: '',
  };

  dealerForms: FormGroup = new FormGroup({
    deaFullName: new FormControl('', [Validators.required]),
    deaEmail: new FormControl('', [Validators.required, Validators.email]),
    deaPhone: new FormControl('', [Validators.required]),
    deaCedula: new FormControl('', [Validators.required]),
  });

  saveDealer() {
    this.dealerObject = this.dealerForms.value;

    this.dealerObject.deaCedula = this.dealerObject.deaCedula.toString();
    this.dealerObject.deaPhone = this.dealerObject.deaPhone.toString();

    this.dealerService.saveDealer(this.dealerObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Dealer saved successfully');
          this.dealerForms.reset();
          this.router.navigate(['/inventory-dealer']);
        } else {
          alert('Error saving dealer');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error saving dealer: ' + (error.message || 'Unknown error'));
      }
    );
  } 
}
