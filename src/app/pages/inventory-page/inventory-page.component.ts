import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.css'
})
export class InventoryPageComponent {

  mostSalingProducts = [
    { proID: '1', proName: 'Product 1 ascnsnojdcvnj', proPrice: '100', proImage: 'https://via.placeholder.com/150', sales: '1000' },
    { proID: '2', proName: 'Product 2 ascnsnojdcvnj', proPrice: '99000000', proImage: 'https://via.placeholder.com/150', sales: '1000' },
    { proID: '3', proName: 'Product 3 ascnsnojdcvnj', proPrice: '300', proImage: 'https://via.placeholder.com/150', sales: '1000' },
    { proID: '4', proName: 'Product 4 ascnsnojdcvnj', proPrice: '400', proImage: 'https://via.placeholder.com/150', sales: '1000' },
    { proID: '5', proName: 'Product 5 ascnsnojdcvnj', proPrice: '500', proImage: 'https://via.placeholder.com/150', sales: '1000' },
  ]

  inventorySummary =
    { productsNumber: 100, totalSales: 1000000, totalClients: 1000 }

  productsWithLowStock = [
    { proID: '1', proName: 'Product 1 dsfdfbfsdbv', proPrice: '100', stock: 10 },
    { proID: '2', proName: 'Product 2 dsfdfbfsdbv', proPrice: '99000000', stock: 10 },
    { proID: '3', proName: 'Product 3 dsfdfbfsdbv', proPrice: '300', stock: 10 },
    { proID: '4', proName: 'Product 4 dsfdfbfsdbv', proPrice: '400', stock: 10 },
    { proID: '5', proName: 'Product 5 dsfdfbfsdbv', proPrice: '500', stock: 10 },
  ]
}
