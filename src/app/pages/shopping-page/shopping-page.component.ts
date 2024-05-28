import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-shopping-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './shopping-page.component.html',
  styleUrl: './shopping-page.component.css'
})
export class ShoppingPageComponent {
  factura = {
    id: 1,
    fecha: '2021-06-01',
    cliente: 'Juan Perez',
    total: 1000,
    productos: [
      {
        id: 1,
        nombre: 'Producto 1',
        cantidad: 2,
        precio: 500,
        impuesto: 20
      }
    ]
  };

  subtotal = this.factura.productos.reduce((acc, producto) => {
    return acc + producto.precio * producto.cantidad;
  }, 0);

  totalImpuestos = this.factura.productos.reduce((acc, producto) => {
    return acc + producto.cantidad * producto.impuesto;
  }, 0);
}