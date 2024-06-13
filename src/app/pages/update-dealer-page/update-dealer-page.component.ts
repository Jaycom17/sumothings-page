import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DealerServicesService } from '../../services/dealer/dealer-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

/**
 * Componente para la página de actualización de un distribuidor.
 */
@Component({
  selector: 'app-update-dealer-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './update-dealer-page.component.html',
  styleUrl: './update-dealer-page.component.css'
})
export class UpdateDealerPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dealerService: DealerServicesService, private router: Router) {}

  /**
   * ID del distribuidor.
   */
  deaID: string | any = '';

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene el valor del parámetro de la URL y carga los datos del distribuidor correspondiente.
   */
  ngOnInit(): void {
    this.deaID = this.route.snapshot.paramMap.get('id');
    this.dealerService.getDealerById(this.deaID).subscribe((dealer: any) => {
      this.dealerObject = dealer;
      this.dealerForms.setValue({
        deaFullName: this.dealerObject.deaFullName,
        deaEmail: this.dealerObject.deaEmail,
        deaPhone: this.dealerObject.deaPhone,
        deaCedula: this.dealerObject.deaCedula,
      });
    });
  }

  /**
   * Objeto que representa los datos del distribuidor.
   */
  dealerObject = {
    deaFullName: '',
    deaEmail: '',
    deaPhone: '',
    deaCedula: '',
  };

  /**
   * Formulario para la edición de los datos del distribuidor.
   */
  dealerForms: FormGroup = new FormGroup({
    deaFullName: new FormControl('', [Validators.required]),
    deaEmail: new FormControl('', [Validators.required, Validators.email]),
    deaPhone: new FormControl('', [Validators.required]),
    deaCedula: new FormControl('', [Validators.required]),
  });

  /**
   * Método para actualizar los datos del distribuidor.
   * Actualiza el objeto del distribuidor con los valores del formulario y realiza la llamada al servicio para actualizar los datos en el backend.
   * Si la actualización es exitosa, muestra una alerta de éxito y redirige al usuario a la página de inventario de distribuidores.
   * Si ocurre un error, muestra una alerta de error.
   */
  updateDealer() {
    this.dealerObject = this.dealerForms.value;

    this.dealerObject.deaCedula = this.dealerObject.deaCedula.toString();
    this.dealerObject.deaPhone = this.dealerObject.deaPhone.toString();

    this.dealerService.updateDealer(this.deaID, this.dealerObject).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          alert('Distribuidor actualizado exitosamente');
          this.dealerForms.reset();
          this.router.navigate(['/inventory-dealer']);
        } else {
          alert('Error al actualizar el distribuidor');
        }
      },
      (error) => {
        // Maneja el error aquí, por ejemplo:
        alert('Error al guardar el distribuidor: ' + (error.message || 'Error desconocido'));
      }
    );
  } 

}
