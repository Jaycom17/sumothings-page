import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-product-list',
  imports: [NavbarComponent, FooterComponent],
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})


export class ProductListComponent {
   // Creamos un array de productos
    arrow = true;

   products = [
    { id: 1, name: 'Producto 1', type: "electrodomestico", price: 10, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', quantity: 0 },
    { id: 2, name: 'Producto 2', type: "electrodomestico", price: 15, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', quantity: 0 },
    { id: 3, name: 'Producto 3', type: "electrodomestico", price: 20, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', quantity: 0 },
    { id: 4, name: 'Producto 4', type: "domotica", price: 25, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', quantity: 0 },
    { id: 5, name: 'Producto 5', type: "domotica", price: 30, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', quantity: 0 },
    { id: 6, name: 'Producto 6', type: "domotica", price: 35, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', quantity: 0 },
    { id: 7, name: 'Producto 7', type: "computadores", price: 40, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', quantity: 0 },
    { id: 8, name: 'Producto 8', type: "computadores", price: 45, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', quantity: 0 },
    { id: 9, name: 'Producto 9', type: "computadores", price: 50, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', quantity: 0 },
    { id: 10, name: 'Producto 10', type: "computadores", price: 55, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg', quantity: 0 },
    { id: 11, name: 'Producto 11', type: "electrodomestico", price: 60, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg', quantity: 0 },
    { id: 12, name: 'Producto 12', type: "electrodomestico", price: 65, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', quantity: 0},
    { id: 13, name: 'Producto 13', type: "electrodomestico", price: 70, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', quantity: 0 }
  ];

  productsCopy = this.products.slice();

  // Creamos un array para almacenar la cantidad de cada producto

  constructor() {
    // Inicializamos el array de cantidades con ceros
  }

  searchProduct(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.products = this.productsCopy.filter((product) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase())|| product.type.toLowerCase().includes(searchValue.toLowerCase());
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
      this.products.sort((a, b) => b.price - a.price);
      this.arrow = false;
    } else {
      this.products.sort((a, b) => a.price - b.price);
      this.arrow = true;
    }
  }

  orderByName() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  orderByType() {
    this.products.sort((a, b) => a.type.localeCompare(b.type));
  }
}
