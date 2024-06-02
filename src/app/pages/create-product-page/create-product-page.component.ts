import { Component,OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TypeproductService } from '../../services/typeProduct/typeproduct.service';

@Component({
  selector: 'app-create-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './create-product-page.component.html',
  styleUrl: './create-product-page.component.css',
})



export class CreateProductPageComponent implements OnInit{
  constructor(private productService: ProductsServiciesService, private router: Router, private typeProductsService: TypeproductService) {}
  
  file: File | null = null;

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
      this.file = file;
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
    file: new FormControl([Validators.required]),
    proTypeID: new FormControl('', [Validators.required])
  });

  createProduct() {
    
    let updateForm = new FormData();

    updateForm.append('proName', this.productForms.value.proName);
    updateForm.append('proStock', this.productForms.value.proStock);
    updateForm.append('proHeight', this.productForms.value.proHeight);
    updateForm.append('proWidth', this.productForms.value.proWidth);
    updateForm.append('proLength', this.productForms.value.proLength);
    updateForm.append('proWeight', this.productForms.value.proWeight);
    updateForm.append('proBuyPrice', this.productForms.value.proBuyPrice);
    updateForm.append('proSellPrice', this.productForms.value.proSellPrice);
    updateForm.append('proMinStock', this.productForms.value.proMinStock);
    updateForm.append('proMaxStock', this.productForms.value.proMaxStock);
    updateForm.append('proDescription', this.productForms.value.proDescription);
    updateForm.append('proTypeID', this.productForms.value.proTypeID);
    if (this.file) {
      updateForm.append('file', this.file, this.file.name);
    }

    console.log(this.productForms.value)

    this.productService.createProduct(updateForm).subscribe(
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
