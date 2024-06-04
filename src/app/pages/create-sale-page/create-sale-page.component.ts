import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { SelectComponent } from '../../components/select/select.component';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';

@Component({
  selector: 'app-create-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, SelectComponent],
  templateUrl: './create-sale-page.component.html',
  styleUrl: './create-sale-page.component.css'
})
export class CreateSalePageComponent implements OnInit{

  constructor(private productsService: ProductsServiciesService) { }

  productsToSelect:any = []

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.productsToSelect = data;
    });
  }

  productAux = { proID: '1', proName: '', proPrice: 0, proQuantity: 0, proTax: 0 };

  products:any = [];  

  addProduct() {
    this.products.push(this.productAux);
    this.productAux = { proID: (Number.parseInt(this.productAux.proID) +1).toString(), proName: '', proPrice: 0, proQuantity: 0, proTax: 0 };
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

  deleteProduct(proID: any) {
    this.products = this.products.filter((p: any) => p.proID !== proID);
  }

  addProductToSale(previusProID: any, event: Event) {

    const proID = (event.target as HTMLSelectElement).value;

    if (proID === '0') {
      return;
    }

    const productSelected = this.productsToSelect.find((p: any) => p.proID === proID);

    const index = this.products.findIndex((p: any) => p.proID === previusProID);


    this.products[index] = {
      proID: productSelected.proID,
      proName: productSelected.proName,
      proPrice: productSelected.proSellPrice,
      proQuantity: 1,
      proTax: 0
    };

  }

  getTax(event: Event, proID: any) {
    const tax = (event.target as HTMLSelectElement).value;

    const index = this.products.findIndex((p: any) => p.proID === proID);

    this.products[index].proTax = Number.parseInt(tax);
  }

  getSubtotal(){
    let subtotal = 0;
    this.products.forEach((p: any) => {
      subtotal += p.proPrice * p.proQuantity;
    });
    return subtotal;
  }

  getTotalTax(){
    let totalTax = 0;
    this.products.forEach((p: any) => {
      totalTax += p.proTax * p.proQuantity;
    });
    return totalTax;
  }

  getTotal(){
    return this.getSubtotal() + this.getTotalTax();
  }

  getQuantity(event: Event, proID: any) {
    const quantity = (event.target as HTMLInputElement).value;

    const index = this.products.findIndex((p: any) => p.proID === proID);

    this.products[index].proQuantity = Number.parseInt(quantity);
  }
}
