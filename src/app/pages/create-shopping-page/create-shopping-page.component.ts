import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { ProductsServiciesService } from '../../services/products/products-servicies.service';

@Component({
  selector: 'app-create-shopping-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './create-shopping-page.component.html',
  styleUrl: './create-shopping-page.component.css'
})
export class CreateShoppingPageComponent implements OnInit {
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

  dealers = [
    { deaID: '1', deaName: 'Juan Perez' },
    { deaID: '2', deaName: 'Maria Lopez' },
    { deaID: '3', deaName: 'Pedro Ramirez' },
    { deaID: '4', deaName: 'Ana Jimenez' },
    { deaID: '5', deaName: 'Carlos Rodriguez' },
    { deaID: '5', deaName: 'Carlos Rodriguez' },
    { deaID: '5', deaName: 'Carlos Rodriguez' },
    { deaID: '5', deaName: 'Carlos Rodriguez' },
    { deaID: '5', deaName: 'Carlos Rodriguez' }
  ];

  dealersCopy = this.dealers;

  searchDealer(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.dealers = this.dealersCopy.filter(dealer => dealer.deaName.toLowerCase().includes(value));
  }

  actualDealer? = { deaID: '', deaName: '' }

  selectDealer(deaID: string) {
    this.actualDealer = this.dealers.find(dealer => dealer.deaID === deaID);
    this.changeDealerStatus();
    this.showDealer = false;
    this.dealers = this.dealersCopy;
  }

  shoppingToCreate = {
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

  showDealer = false;

  changeDealerStatus() {
    this.showDealer = !this.showDealer;
    this.dealers = this.dealersCopy;
  }

  deleteProduct(proID: any) {
    this.products = this.products.filter((p: any) => p.proID !== proID);
  }

  addProductToShop(previusProID: any, event: Event) {

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
