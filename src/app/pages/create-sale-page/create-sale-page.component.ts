import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-create-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, SelectComponent],
  templateUrl: './create-sale-page.component.html',
  styleUrl: './create-sale-page.component.css'
})
export class CreateSalePageComponent {

  productAux = { proID: '', proName: '', proPrice: 0, proQuantity: 0, proTax: 0 };

  products:any = [];

  addProduct() {
    this.products.push(this.productAux);
    this.productAux = { proID: '', proName: '', proPrice: 0, proQuantity: 0, proTax: 0 };
  }

  clients = [
    { cliID: '1', cliName: 'Juan Perez' },
    { cliID: '2', cliName: 'Maria Lopez' },
    { cliID: '3', cliName: 'Pedro Ramirez' },
    { cliID: '4', cliName: 'Ana Jimenez' },
    { cliID: '5', cliName: 'Carlos Rodriguez' },
    { cliID: '5', cliName: 'Carlos Rodriguez' },
    { cliID: '5', cliName: 'Carlos Rodriguez' },
    { cliID: '5', cliName: 'Carlos Rodriguez' },
    { cliID: '5', cliName: 'Carlos Rodriguez' }
  ];

  clientsCopy = this.clients;

  searchClient(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.clients = this.clientsCopy.filter(client => client.cliName.toLowerCase().includes(value));
  }

  actualClient? = { cliID: '', cliName: '' }

  selectClient(cliID: string) {
    this.actualClient = this.clients.find(client => client.cliID === cliID);
    this.changeClientStatus();
    this.showClient = false;
    this.clients = this.clientsCopy;
  }

  saleToCreate = {
    salDate: '2021-06-01',
    proveedor: 'Juan Perez',
    total: 1000,
    productos: [
      {
        id: 1,
        nombre: 'Producto 1',
        cantidad: 2,
        precio: 500,
        impuesto: 20
      }
    ]
  };

  showClient = false;

  changeClientStatus() {
    this.showClient = !this.showClient;
    this.clients = this.clientsCopy;
  }


}
