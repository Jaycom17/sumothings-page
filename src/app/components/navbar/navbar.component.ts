import { Component, ElementRef, HostListener } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShoppingCartComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isOpen = false;
  showShoppingCart = false;
  openSideBar() {
    this.isOpen = this.isOpen ? false : true;
  }
  showCart() {
    this.showShoppingCart = this.showShoppingCart ? false : true;
  }

  showProfile = false;

  setShowProfile() {
    this.showProfile = !this.showProfile;
  }

  constructor(private elementRef: ElementRef) {}

  closeShoppingCart(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showShoppingCart = false;
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent) {
    this.closeShoppingCart(event);
  }
}
