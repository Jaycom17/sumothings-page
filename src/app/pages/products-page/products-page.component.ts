import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-product-list',
  imports: [NavbarComponent],
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})


export class ProductListComponent {
   // Creamos un array de productos
   products = [
    { id: 1, name: 'Producto 1', price: 10, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', quantity: 0 },
    { id: 2, name: 'Producto 2', price: 15, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', quantity: 0 },
    { id: 3, name: 'Producto 3', price: 20, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', quantity: 0 },
    { id: 4, name: 'Producto 4', price: 25, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', quantity: 0 },
    { id: 5, name: 'Producto 5', price: 30, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', quantity: 0 },
    { id: 6, name: 'Producto 6', price: 35, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', quantity: 0 },
    { id: 7, name: 'Producto 7', price: 40, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', quantity: 0 },
    { id: 8, name: 'Producto 8', price: 45, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', quantity: 0 },
    { id: 9, name: 'Producto 9', price: 50, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', quantity: 0 },
    { id: 10, name: 'Producto 10', price: 55, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg', quantity: 0 },
    { id: 11, name: 'Producto 11', price: 60, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg', quantity: 0 },
    { id: 12, name: 'Producto 12', price: 65, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', quantity: 0},
    { id: 13, name: 'Producto 13', price: 70, imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', quantity: 0 }
  ];

  // Creamos un array para almacenar la cantidad de cada producto

  constructor() {
    // Inicializamos el array de cantidades con ceros
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
}
