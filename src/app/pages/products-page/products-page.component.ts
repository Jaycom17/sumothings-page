import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';
import { Product } from '../../interfaces/Product.interface';
@Component({
  selector: 'app-product-list',
  imports: [NavbarComponent, FooterComponent],
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})


export class ProductListComponent implements OnInit{
   // Creamos un array de productos
    arrow = true;
  constructor(private productService: ProductsServiciesService) { }
  products: Product[] = [
   
  ];

  productsCopy:Product[] = [];

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.productsCopy = products;
    });
  }

  searchProduct(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.products = this.productsCopy.filter((product) => {
      return product.proName.toLowerCase().includes(searchValue.toLowerCase())|| product.proTypeID.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  // Creamos un método para generar las filas de productos

  // Creamos dos métodos para incrementar y decrementar la cantidad de productos
  incrementQuantity(product: any) {
    product.quantity++;
  }

  decrementQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  // Creamos un método para agregar productos al carrito
  addToCart(product: any) {
    if (product.quantity > 0) {
      alert(`Agregando ${product.quantity} de ${product.name} al carrito`);
    }
    
  }
  getProductRows(itemsPerRow: number) {
    let rows = [];
    for (let i = 0; i < this.products.length; i += itemsPerRow) {
      rows.push(this.products.slice(i, i + itemsPerRow));
    }
    return rows;
  }

  orderByPrice() {
    if (this.arrow) {
      this.products.sort((a, b) => b.proSellPrice - a.proSellPrice);
      this.arrow = false;
    } else {
      this.products.sort((a, b) => a.proSellPrice - b.proSellPrice);
      this.arrow = true;
    }
  }

  orderByName() {
    this.products.sort((a, b) => a.proName.localeCompare(b.proName));
  }

  orderByType() {
    this.products.sort((a, b) => a.proTypeID.localeCompare(b.proTypeID));
  }
}
