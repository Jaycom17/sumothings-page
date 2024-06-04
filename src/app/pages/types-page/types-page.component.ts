import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { TypeproductService } from '../../services/typeProduct/typeproduct.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-types-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './types-page.component.html',
  styleUrl: './types-page.component.css'
})
export class TypesPageComponent implements OnInit{
  constructor(private typeProductService: TypeproductService) { }

  productTypes: any = [];
  productTypesCopy: any = [];
  showCreateTypeProduct = false;
  showEditTypeProduct = false;
  nameToEdit = '';
  typeProductForm: FormGroup = new FormGroup({
    ptName: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.typeProductService.getAllTypeProducts().subscribe((data) => {
      this.productTypes = data;
      this.productTypesCopy = this.productTypes;
    });
  }

  updateNameToEdit(event: Event): void {
    this.nameToEdit = (event.target as HTMLInputElement).value;
  }

  searchTypeProduct(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.productTypes = this.productTypesCopy.filter((type: any) => {
      return type.ptName.toLowerCase().includes(value.toLowerCase());
    });
  }

  deleteTypeProduct(id: string): void {
    const confirmDelete = confirm('¿Seguro que quieres eliminar esta categoria?');
    if(!confirmDelete) return;
    this.productTypes = this.productTypes.filter((type: any) => type.ptID !== id);
    this.productTypesCopy = this.productTypesCopy.filter((type: any) => type.ptID !== id);
    this.typeProductService.deleteTypeProduct(id).subscribe();
  }

  openCreateTypeProduct(): void {
    this.showCreateTypeProduct = !this.showCreateTypeProduct;
  }

  orderByName(): void {
    this.productTypes.sort((a: any, b: any) => {
      return a.name.localeCompare(b.name);
    });
  }

  changeUpdate():void {
    this.showEditTypeProduct = !this.showEditTypeProduct;
  }

  editTypeProduct(id: string): void {
    let typeToUpdate = {ptName: this.nameToEdit};
    console.log(typeToUpdate)
    this.typeProductService.updateTypeProduct(id, typeToUpdate).subscribe(()=>{
      this.ngOnInit();
    });
    this.showEditTypeProduct = false;
  }

  createTypeProduct(): void {
    let typeProduct = this.typeProductForm.value;
    console.log(typeProduct)
    
    this.typeProductService.createTypeProduct(typeProduct).subscribe(() => {
      this.ngOnInit();
    });
    this.showCreateTypeProduct = false;
  }
}
