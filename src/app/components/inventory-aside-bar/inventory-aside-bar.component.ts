import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http'; 

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

  constructor(private authService: AuthServiceService, private router: Router) {}

  logout() {
    const confirmLogout = confirm('¿Seguro que desea cerrar sesión?');

    if(!confirmLogout) return;

    this.authService.logout().subscribe(
      (response: HttpResponse<any>) => {
        console.log(response)
        if (response.status === 200) {
          this.router.navigate(['/admin-login']);
        } else {
          alert('Error logging out');
        }
      },
      (error) => {
        // Handle error here, for example:
        alert('Error logging out: ' + (error.message || 'Unknown error'));
      }
    );
  }
}
