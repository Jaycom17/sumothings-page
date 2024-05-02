import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-inventory-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-product-page.component.html',
  styleUrl: './inventory-product-page.component.css'
})
export class InventoryProductPageComponent {
  products = [
    { proID: '1', proName: 'Product 1', proStock: '10', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
  ]
}
