import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { SaleServiceService } from '../../services/sale/sale-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sale-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './sale-page.component.html',
  styleUrl: './sale-page.component.css'
})
export class SalePageComponent implements OnInit{
  receipt:any = {};

  constructor(private saleService: SaleServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let salReciept: string | any = this.route.snapshot.paramMap.get('id');
    console.log(salReciept)
    this.saleService.getSaleById(salReciept).subscribe(
      (res: any) => {
        this.receipt = res;
        console.log(res)
      }
    )
  }

  getSubtotal(): number {
    return this.receipt.products.reduce((acc: number, producto:any) => {
      return acc + producto.salPrice * producto.salProductUnits;
    }, 0);
  }

  getTaxes(): number {
    return this.receipt.products.reduce((acc: number, producto:any) => {
      return acc + producto.salProductUnits * producto.salTaxes;
    }, 0);
  }
}
