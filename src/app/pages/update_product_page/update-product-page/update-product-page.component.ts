import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../../components/inventory-aside-bar/inventory-aside-bar.component';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { ProductsServiciesService } from '../../../services/products/products-servicies.service';
import { Product } from '../../../interfaces/Product.interface';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TypeproductService } from '../../../services/typeProduct/typeproduct.service';


/**
 * Componente para la página de actualización de productos.
 */
@Component({
  selector: 'app-update-product-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './update-product-page.component.html',
  styleUrl: './update-product-page.component.css',
})
export class UpdateProductPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsServiciesService,
    private router: Router,
    private typeProductsService: TypeproductService
  ) {}

  file: File | null = null;

  proID: string | any = '';

  typeProducts = [
    {
      ptID: '',
      ptName: '',
    },
  ];

  /**
   * Método que se ejecuta cuando se selecciona un archivo.
   * @param event El evento de selección de archivo.
   */
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
    proTypeID: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.typeProductsService.getAllTypeProducts().subscribe((typeProducts: any) => {
      this.typeProducts = typeProducts;
    });
    this.proID = this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(this.proID).subscribe((product: Product) => {
      this.productForms.setValue({
        proName: product.proName,
        proStock: product.proStock,
        proHeight: product.proHeight,
        proWidth: product.proWidth,
        proLength: product.proLength,
        proWeight: product.proWeight,
        proBuyPrice: product.proBuyPrice,
        proSellPrice: product.proSellPrice,
        proMinStock: product.proMinStock,
        proMaxStock: product.proMaxStock,
        proDescription: product.proDescription,
        proTypeID: product.proTypeID,
      });
    });
  }

  /**
   * Método para actualizar un producto.
   */
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

    console.log(updateForm.get('file'));

    this.productService.updateProduct(updateForm, this.proID).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Producto guardado exitosamente');
          this.productForms.reset();
          this.router.navigate(['/inventory-product']);
        } else {
          alert('Error al guardar el producto');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        console.error('Error al guardar el producto', error);
        alert('Error al guardar el producto: ' + (error.message || 'Error desconocido'));
      }
    );
  }
}
    


  