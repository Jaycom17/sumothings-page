import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-dealer-page.component.html',
  styleUrl: './create-dealer-page.component.css'
})
export class CreateDealerPageComponent {

  dealerObject = {
    deaFullName: '',
    deaEmail: '',
    deaPhone: '',
    deaCedula: ''
  }

  dealerForms: FormGroup = new FormGroup({
    deaFullName: new FormControl(''),
    deaEmail: new FormControl(''),
    deaPhone: new FormControl(''),
    deaCedula: new FormControl('')
  });

  saveDealer() {
    this.dealerObject = this.dealerForms.value;
    console.log(this.dealerObject)
    this.dealerForms.reset();
  }
}
