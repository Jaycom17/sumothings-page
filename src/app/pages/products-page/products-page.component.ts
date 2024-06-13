import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';
import { Product } from '../../interfaces/Product.interface';
import { ShoppingCarServiceService } from '../../services/shoppingCar/shopping-car-service.service';

@Component({
  selector: 'app-product-list',
  imports: [NavbarComponent, FooterComponent],
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductListComponent implements OnInit{
  /**
   * Variable que indica si la flecha de ordenamiento está en sentido ascendente o descendente.
   */
  arrow = true;

  constructor(private productService: ProductsServiciesService, private shoppingService: ShoppingCarServiceService) { }

  /**
   * Array que almacena los productos obtenidos del servicio.
   */
  products: any[] = [];

  /**
   * Copia del array de productos original.
   */
  productsCopy:any[] = [];

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene los productos del servicio y asigna una cantidad inicial de 1 a cada producto.
   */
  ngOnInit(): void{
    this.productService.getProductBrief().subscribe((products: Product[]) => {
      this.products = products;
      this.products.forEach((product) => {
        product.quantity = 1;
      });
      this.productsCopy = products;
    });
  }

  /**
   * Método que filtra los productos según el valor de búsqueda ingresado.
   * @param event El evento de entrada que contiene el valor de búsqueda.
   */
  searchProduct(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.products = this.productsCopy.filter((product) => {
      return product.proName.toLowerCase().includes(searchValue.toLowerCase())|| product.proTypeID.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  /**
   * Método que incrementa la cantidad de un producto.
   * @param product El producto al que se le incrementará la cantidad.
   */
  incrementQuantity(product: any) {
    product.quantity++;
  }

  /**
   * Método que decrementa la cantidad de un producto.
   * @param product El producto al que se le decrementará la cantidad.
   */
  decrementQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  /**
   * Método que agrega un producto al carrito de compras.
   * @param product El producto que se agregará al carrito.
   * @param proQuantity La cantidad del producto que se agregará al carrito.
   */
  addToCart(product: any, proQuantity: number) {
    product.quantity = proQuantity;
    if (product.quantity > 0) {
      this.shoppingService.addProductToShoppingCar(product);
      product.quantity = 1;
    }
  }

  /**
   * Método que genera las filas de productos según la cantidad de elementos por fila.
   * @param itemsPerRow La cantidad de elementos por fila.
   * @returns Un array de filas de productos.
   */
  getProductRows(itemsPerRow: number) {
    let rows = [];
    for (let i = 0; i < this.products.length; i += itemsPerRow) {
      rows.push(this.products.slice(i, i + itemsPerRow));
    }
    return rows;
  }

  /**
   * Método que ordena los productos por precio de forma ascendente o descendente.
   */
  orderByPrice() {
    if (this.arrow) {
      this.products.sort((a, b) => b.proSellPrice - a.proSellPrice);
      this.arrow = false;
    } else {
      this.products.sort((a, b) => a.proSellPrice - b.proSellPrice);
      this.arrow = true;
    }
  }

  /**
   * Método que ordena los productos por nombre de forma ascendente.
   */
  orderByName() {
    this.products.sort((a, b) => a.proName.localeCompare(b.proName));
  }

  /**
   * Método que ordena los productos por tipo de forma ascendente.
   */
  orderByType() {
    this.products.sort((a, b) => a.proTypeID.localeCompare(b.proTypeID));
  }
}
