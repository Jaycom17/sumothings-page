import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-create-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, SelectComponent],
  templateUrl: './create-sale-page.component.html',
  styleUrl: './create-sale-page.component.css'
})
export class CreateSalePageComponent {

}
