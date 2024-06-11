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

  file: File | null = null;
 
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }
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
    file: new FormControl([Validators.required]),
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

    this.productService.updateProduct(updateForm,this.proID).subscribe(
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
    


  