import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { TypeproductService } from '../../services/typeProduct/typeproduct.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

/**
 * Componente para la página de tipos de productos.
 */
@Component({
  selector: 'app-types-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './types-page.component.html',
  styleUrl: './types-page.component.css'
})
export class TypesPageComponent implements OnInit{
  constructor(private typeProductService: TypeproductService) { }

  /**
   * Lista de tipos de productos.
   */
  productTypes: any = [];

  /**
   * Copia de la lista de tipos de productos.
   */
  productTypesCopy: any = [];

  /**
   * Indica si se debe mostrar el formulario para crear un nuevo tipo de producto.
   */
  showCreateTypeProduct = false;

  /**
   * Indica si se debe mostrar el formulario para editar un tipo de producto.
   */
  showEditTypeProduct = false;

  /**
   * Nombre del tipo de producto a editar.
   */
  nameToEdit = '';
  
  /**
   * Formulario para el tipo de producto.
   */
  typeProductForm: FormGroup = new FormGroup({
    ptName: new FormControl('', [Validators.required]),
  });

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene todos los tipos de productos y los asigna a la lista de tipos de productos.
   */
  ngOnInit(): void {
    this.typeProductService.getAllTypeProducts().subscribe((data) => {
      this.productTypes = data;
      this.productTypesCopy = this.productTypes;
    });
  }

  /**
   * Actualiza el nombre del tipo de producto a editar.
   * @param event - Evento que contiene el valor del nombre.
   */
  updateNameToEdit(event: Event): void {
    this.nameToEdit = (event.target as HTMLInputElement).value;
  }

  /**
   * Realiza la búsqueda de tipos de productos según el valor ingresado.
   * @param event - Evento que contiene el valor de búsqueda.
   */
  searchTypeProduct(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.productTypes = this.productTypesCopy.filter((type: any) => {
      return type.ptName.toLowerCase().includes(value.toLowerCase());
    });
  }

  /**
   * Elimina un tipo de producto.
   * @param id - ID del tipo de producto a eliminar.
   */
  deleteTypeProduct(id: string): void {
    const confirmDelete = confirm('¿Seguro que quieres eliminar esta categoria?');
    if(!confirmDelete) return;
    this.productTypes = this.productTypes.filter((type: any) => type.ptID !== id);
    this.productTypesCopy = this.productTypesCopy.filter((type: any) => type.ptID !== id);
    this.typeProductService.deleteTypeProduct(id).subscribe();
  }

  /**
   * Abre o cierra el formulario para crear un nuevo tipo de producto.
   */
  openCreateTypeProduct(): void {
    this.showCreateTypeProduct = !this.showCreateTypeProduct;
  }

  /**
   * Ordena la lista de tipos de productos por nombre.
   */
  orderByName(): void {
    this.productTypes.sort((a: any, b: any) => {
      return a.name.localeCompare(b.name);
    });
  }

  /**
   * Cambia el estado de visualización del formulario para editar un tipo de producto.
   */
  changeUpdate():void {
    this.showEditTypeProduct = !this.showEditTypeProduct;
  }

  /**
   * Edita un tipo de producto.
   * @param id - ID del tipo de producto a editar.
   */
  editTypeProduct(id: string): void {
    let typeToUpdate = {ptName: this.nameToEdit};
    console.log(typeToUpdate)
    this.typeProductService.updateTypeProduct(id, typeToUpdate).subscribe(()=>{
      this.ngOnInit();
    });
    this.showEditTypeProduct = false;
  }

  /**
   * Crea un nuevo tipo de producto.
   */
  createTypeProduct(): void {
    let typeProduct = this.typeProductForm.value;
    
    this.typeProductService.createTypeProduct(typeProduct).subscribe(() => {
      this.ngOnInit();
    });
    this.showCreateTypeProduct = false;
  }
}
