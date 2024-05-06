import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-create-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './create-product-page.component.html',
  styleUrl: './create-product-page.component.css'
})
export class CreateProductPageComponent {
  categories = [
    {
      id: 1,
      name: 'Electronics'
    },
    {
      id: 2,
      name: 'Clothing'
    },
    {
      id: 3,
      name: 'Footwear'
    }
  ];

}
