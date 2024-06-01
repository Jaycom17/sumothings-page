import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-create-client-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './create-client-page.component.html',
  styleUrl: './create-client-page.component.css'
})
export class CreateClientPageComponent {

}
