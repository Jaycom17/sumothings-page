import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../../components/inventory-aside-bar/inventory-aside-bar.component';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { ProductsServiciesService } from '../../../services/products/products-servicies.service';
import { Product } from '../../../interfaces/Product.interface';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TypeproductService } from '../../../services/typeProduct/typeproduct.service';

@Component({
  selector: 'app-update-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './update-product-page.component.html',
  styleUrl: './update-product-page.component.css',
})

export class UpdateProductPageComponent {
  constructor(private route: ActivatedRoute ,private productService: ProductsServiciesService,private router: Router , private typeProductsService: TypeproductService) {}

  proID: string | any = '';
  product:Product = {
    proName: "", 
    proStock: 0, 
    proHeight: 0, 
    proWidth: 0, 
    proLength: 0, 
    proWeight: 0, 
    proBuyPrice: 0, 
    proSellPrice: 0, 
    proMinStock: 0, 
    proMaxStock: 0, 
    proDescription: "", 
    proImage: "", 
    proTypeID: ""
  }

  typeProducts= [
    {
      ptID: "",
      ptName: ""
    }
  ];

  productForms: FormGroup = new FormGroup({
    proName: new FormControl(this.product.proName, [Validators.required]),
    proStock: new FormControl(this.product.proHeight, [Validators.required]),
    proHeight: new FormControl(this.product.proHeight, [Validators.required]),
    proWidth: new FormControl(this.product.proWidth, [Validators.required]),
    proLength: new FormControl(this.product.proLength, [Validators.required]),
    proWeight: new FormControl(this.product.proWeight, [Validators.required]),
    proBuyPrice: new FormControl(this.product.proBuyPrice, [Validators.required]),
    proSellPrice: new FormControl(this.product.proSellPrice, [Validators.required]),
    proMinStock: new FormControl(this.product.proMinStock, [Validators.required]),
    proMaxStock: new FormControl(this.product.proMaxStock, [Validators.required]),
    proDescription: new FormControl(this.product.proDescription, [Validators.required]),
    proImage: new FormControl(this.product.proImage, [Validators.required]),
    proTypeID: new FormControl(this.product.proTypeID, [Validators.required])
  });

  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.typeProductsService.getAllTypeProducts().subscribe((typeProducts: any) => {
      this.typeProducts = typeProducts;
    });
    this.proID = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.proID).subscribe((product: Product) => {
      this.product = product;
      this.productForms = new FormGroup({
        proName: new FormControl(this.product.proName, [Validators.required]),
        proStock: new FormControl(this.product.proHeight, [Validators.required]),
        proHeight: new FormControl(this.product.proHeight, [Validators.required]),
        proWidth: new FormControl(this.product.proWidth, [Validators.required]),
        proLength: new FormControl(this.product.proLength, [Validators.required]),
        proWeight: new FormControl(this.product.proWeight, [Validators.required]),
        proBuyPrice: new FormControl(this.product.proBuyPrice, [Validators.required]),
        proSellPrice: new FormControl(this.product.proSellPrice, [Validators.required]),
        proMinStock: new FormControl(this.product.proMinStock, [Validators.required]),
        proMaxStock: new FormControl(this.product.proMaxStock, [Validators.required]),
        proDescription: new FormControl(this.product.proDescription, [Validators.required]),
        proImage: new FormControl(this.product.proImage, [Validators.required]),
        proTypeID: new FormControl(this.product.proTypeID, [Validators.required])
        });
    });
  }

  updateProduct() {
    this.product = this.productForms.value;

    this.productService.updateProduct(this.product).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Product saved successfully');
          this.productForms.reset();
          this.router.navigate(['/inventory-product']);
        } else {
          alert('Error saving product');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error saving product: ' + (error.message || 'Unknown error'));
      }
    );
  }
  


}
