import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DealerServicesService } from '../../services/dealer/dealer-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './update-dealer-page.component.html',
  styleUrl: './update-dealer-page.component.css'
})
export class UpdateDealerPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dealerService: DealerServicesService, private router: Router) {}

  deaID: string | any = '';

  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.deaID = this.route.snapshot.paramMap.get('id');
    this.dealerService.getDealerById(this.deaID).subscribe((dealer: any) => {
      this.dealerObject = dealer;
      this.dealerForms.setValue({
        deaFullName: this.dealerObject.deaFullName,
        deaEmail: this.dealerObject.deaEmail,
        deaPhone: this.dealerObject.deaPhone,
        deaCedula: this.dealerObject.deaCedula,
      });
    });
  }

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

  updateDealer() {
    this.dealerObject = this.dealerForms.value;

    this.dealerObject.deaCedula = this.dealerObject.deaCedula.toString();
    this.dealerObject.deaPhone = this.dealerObject.deaPhone.toString();

    this.dealerService.updateDealer(this.deaID, this.dealerObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Dealer updated successfully');
          this.dealerForms.reset();
          this.router.navigate(['/inventory-dealer']);
        } else {
          alert('Error updatting dealer');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error saving dealer: ' + (error.message || 'Unknown error'));
      }
    );
  } 

}
