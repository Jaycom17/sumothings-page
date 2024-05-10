import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-aside-bar',
  standalone: true,
  imports: [],
  templateUrl: './inventory-aside-bar.component.html',
  styleUrl: './inventory-aside-bar.component.css'
})
export class InventoryAsideBarComponent {
  isOpen = false;

  openSideBar() {
    this.isOpen = this.isOpen ? false : true;
  }
}
