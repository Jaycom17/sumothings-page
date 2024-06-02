import { Component,OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';
import { Product } from '../../interfaces/Product.interface';


@Component({
  selector: 'app-inventory-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-product-page.component.html',
  styleUrl: './inventory-product-page.component.css'
})
export class InventoryProductPageComponent implements OnInit{
  constructor(private productService: ProductsServiciesService) { }
  products: Product[] = [];
  productsCopy: Product[] = [];

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.productsCopy = products;
    });
  }

  orderByName(){
    this.products.sort((a, b) => a.proName.localeCompare(b.proName));
  }

  orderByStock(){
    this.products.sort((a, b) => (a.proStock) - (b.proStock));
  }

  orderByCategory(){
    this.products.sort((a, b) => a.proTypeID.localeCompare(b.proTypeID));
  }

  deleteProduct(id: any){
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if(!confirmDelete) return;
    this.products = this.products.filter(product => product.proID !== id);  
    this.productsCopy = this.productsCopy.filter(product => product.proID !== id);
    this.productService.deleteProduct(id).subscribe();
  }

  searchProduct(event: Event){
    let search = (event.target as HTMLInputElement).value.toLowerCase();
    this.products = this.productsCopy.filter(product => product.proName.toLowerCase().includes(search));
  }
}
