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

  /**
   * Inicializa el componente y obtiene todos los productos.
   */
  ngOnInit(): void{
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.productsCopy = products;
    });
  }

  /**
   * Ordena los productos por nombre.
   */
  orderByName(){
    this.products.sort((a, b) => a.proName.localeCompare(b.proName));
  }

  /**
   * Ordena los productos por stock.
   */
  orderByStock(){
    this.products.sort((a, b) => (a.proStock) - (b.proStock));
  }

  /**
   * Ordena los productos por categoría.
   */
  orderByCategory(){
    this.products.sort((a, b) => a.proTypeID.localeCompare(b.proTypeID));
  }

  /**
   * Elimina un producto por su ID.
   * @param id El ID del producto a eliminar.
   */
  deleteProduct(id: any){
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar este producto?');
    if(!confirmDelete) return;
    this.products = this.products.filter(product => product.proID !== id);  
    this.productsCopy = this.productsCopy.filter(product => product.proID !== id);
    this.productService.deleteProduct(id).subscribe();
  }

  /**
   * Busca productos por su nombre.
   * @param event El evento de entrada.
   */
  searchProduct(event: Event){
    let search = (event.target as HTMLInputElement).value.toLowerCase();
    this.products = this.productsCopy.filter(product => product.proName.toLowerCase().includes(search));
  }
}
