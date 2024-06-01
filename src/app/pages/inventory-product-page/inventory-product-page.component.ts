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

  orderByName(){
    this.products.sort((a, b) => a.proName.localeCompare(b.proName));
  }

  orderByStock(){
    this.products.sort((a, b) => Number.parseInt(a.proStock) - Number.parseInt(b.proStock));
  }

  orderByCategory(){
    this.products.sort((a, b) => a.proCategory.localeCompare(b.proCategory));
  }

  deleteProduct(id: string){
    this.products = this.products.filter(product => product.proID !== id);  
  }

  searchProduct(event: Event){
    let search = (event.target as HTMLInputElement).value.toLowerCase();
    this.products = this.productsCopy.filter(product => product.proName.toLowerCase().includes(search));
  }

  products = [
    { proID: '1', proName: 'Product 1', proStock: '10', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', proCategory: 'Electronics'},
    { proID: '2', proName: 'Product 2', proStock: '9', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', proCategory: 'Clothing'},
    { proID: '3', proName: 'Product 3', proStock: '8', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', proCategory: 'Footwear'},
    { proID: '4', proName: 'Product 4', proStock: '11', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', proCategory: 'Electronics'},
    { proID: '5', proName: 'Product 5', proStock: '15', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', proCategory: 'Clothing'},
    { proID: '6', proName: 'Product 6', proStock: '3', proCostPrice: '100' , proSellingPrice: '200', proImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', proCategory: 'Footwear'},
  ]

  productsCopy = this.products;
}
