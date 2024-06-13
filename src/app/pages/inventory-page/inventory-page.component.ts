import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.css'
})
export class InventoryPageComponent implements OnInit{

  constructor(private productService: ProductsServiciesService) { }

  information: any = {};

  ngOnInit(): void {
      this.productService.getProductsStatus().subscribe((data) => {
        this.information = data;
      });
  }
}
