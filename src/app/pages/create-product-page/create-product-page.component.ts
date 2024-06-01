import { Component,OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TypeproductService } from '../../services/typeProduct/typeproduct.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-create-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-product-page.component.html',
  styleUrl: './create-product-page.component.css',
})



export class CreateProductPageComponent implements OnInit{
  constructor(private productService: ProductsServiciesService, private router: Router, private typeProductsService: TypeproductService) {}
  productObject = {
    proName: "", // VARCHAR(128) UNIQUE
    proStock: 0, // INT
    proHeight: 0, // NUMERIC(10,2)
    proWidth: 0, // NUMERIC(10,2)
    proLength: 0, // NUMERIC(10,2)
    proWeight: 0, // NUMERIC(10,2)
    proBuyPrice: 0, // NUMERIC(14,2)
    proSellPrice: 0, // NUMERIC(14,2)
    proMinStock: 0, // INT
    proMaxStock: 0, // INT
    proDescription: "", // TEXT
    proImage: null as File | null, // VARCHAR(255)
    proTypeID: ""
  };
  typeProducts= [
    {
      ptID: "",
      ptName: ""
    }
  ];

  ngOnInit(): void {
    this.typeProductsService.getAllTypeProducts().subscribe((typeProducts: any) => {
      this.typeProducts = typeProducts;
    });
  }
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.productObject.proImage = file;
    }
  }

  productForms: FormGroup = new FormGroup({
    proName: new FormControl('', [Validators.required]),
    proStock: new FormControl('', [Validators.required]),
    proHeight: new FormControl('', [Validators.required]),
    proWidth: new FormControl('', [Validators.required]),
    proLength: new FormControl('', [Validators.required]),
    proWeight: new FormControl('', [Validators.required]),
    proBuyPrice: new FormControl('', [Validators.required]),
    proSellPrice: new FormControl('', [Validators.required]),
    proMinStock: new FormControl('', [Validators.required]),
    proMaxStock: new FormControl('', [Validators.required]),
    proDescription: new FormControl('', [Validators.required]),
    proImage: new FormControl('', [Validators.required]),
    proTypeID: new FormControl('', [Validators.required])
  });

  createProduct() {
    this.productObject = this.productForms.value;
    console.log(this.productForms.value);

    this.productService.createProduct(this.productObject).subscribe(
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
        console.error('Error saving product', error);
        alert('Error saving product: ' + (error.message || 'Unknown error'));
      }
    );
  }



}
