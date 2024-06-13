import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { AdminServiceService } from '../../services/admins/admin-service.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

/**
 * Componente para la página de administración de cuentas de administrador.
 */
@Component({
  selector: 'app-admin-account-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './admin-account-page.component.html',
  styleUrl: './admin-account-page.component.css'
})
export class AdminAccountPageComponent implements OnInit {

  constructor(private adminService: AdminServiceService) { }

  /**
   * Lista de administradores.
   */
  admins: any = [];
  
  /**
   * Copia de la lista de administradores.
   */
  adminsCopy: any = [];
  
  /**
   * Indica si se debe mostrar el formulario de creación de administrador.
   */
  showCreateAdmin = false;

  /**
   * Formulario de actualización de administrador.
   */
  updateForm: FormGroup = new FormGroup({
    admEmail: new FormControl('', [Validators.required, Validators.email]),
    admPassword: new FormControl('', [Validators.required]),
  });

  /**
   * Formulario de creación de administrador.
   */
  createForm: FormGroup = new FormGroup({
    admEmail: new FormControl('', [Validators.required, Validators.email]),
    admPassword: new FormControl('', [Validators.required]),
  });

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene la lista de administradores desde el servicio y la asigna a las variables admins y adminsCopy.
   */
  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((data: any) => {
      this.admins = data;
      this.adminsCopy = data;
    });
  }

  /**
   * Método para buscar un administrador en la lista de administradores.
   * @param event El evento de búsqueda.
   */
  searchAdmin(event: any) {
    const searchValue = event.target.value;
    this.admins = this.adminsCopy.filter((admin: any) => {
      return admin.admEmail.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  /**
   * Método para mostrar u ocultar el formulario de creación de administrador.
   */
  openCreateAdmin() {
    this.showCreateAdmin = !this.showCreateAdmin;
  }

  /**
   * Método para actualizar un administrador.
   * Obtiene los datos del formulario de actualización y llama al servicio para actualizar el administrador.
   * Luego, resetea el formulario y vuelve a obtener la lista de administradores.
   */
  updateAdmin() {
    const admin = this.updateForm.value;
    this.adminService.updateAdmin(admin).subscribe(()=>{
      this.updateForm.reset();
      this.ngOnInit();
    });
  }

  /**
   * Método para eliminar un administrador.
   * @param adminID El ID del administrador a eliminar.
   */
  deleteAdmin(adminID: any) {
    let check = confirm('¿Estás seguro de que quieres eliminar este administrador?');
    if (!check) {
      return;
    }

    this.adminService.deleteAdmin(adminID).subscribe(()=>{
      this.ngOnInit();
    });
  }

  /**
   * Método para crear un administrador.
   * Obtiene los datos del formulario de creación y llama al servicio para guardar el administrador.
   * Luego, oculta el formulario, resetea el formulario y vuelve a obtener la lista de administradores.
   */
  createAdmin() {
    const admin = this.createForm.value;

    this.adminService.saveAdmin(admin).subscribe((data: any) => {
      console.log(data);
      this.showCreateAdmin = false;
      this.createForm.reset();
      this.ngOnInit();
    });
  }

}
