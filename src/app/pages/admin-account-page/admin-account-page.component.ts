import { Component, OnInit } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';
import { AdminServiceService } from '../../services/admins/admin-service.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-account-page',
  standalone: true,
  imports: [InventoryAsideBarComponent, ReactiveFormsModule],
  templateUrl: './admin-account-page.component.html',
  styleUrl: './admin-account-page.component.css'
})
export class AdminAccountPageComponent implements OnInit {

  constructor(private adminService: AdminServiceService) { }

  admins: any = [];
  adminsCopy: any = [];
  showCreateAdmin = false;

  updateForm: FormGroup = new FormGroup({
    admEmail: new FormControl('', [Validators.required, Validators.email]),
    admPassword: new FormControl('', [Validators.required]),
  });

  createForm: FormGroup = new FormGroup({
    admEmail: new FormControl('', [Validators.required, Validators.email]),
    admPassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((data: any) => {
      this.admins = data;
      this.adminsCopy = data;
    });
  }

  searchAdmin(event: any) {
    const searchValue = event.target.value;
    this.admins = this.adminsCopy.filter((admin: any) => {
      return admin.admEmail.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  openCreateAdmin() {
    this.showCreateAdmin = !this.showCreateAdmin;
  }

  updateAdmin() {
    const admin = this.updateForm.value;
    this.adminService.updateAdmin(admin).subscribe(()=>{
      this.updateForm.reset();
      this.ngOnInit();
    });
  }

  deleteAdmin(adminID: any) {
    let check = confirm('Are you sure you want to delete this admin?');
    if (!check) {
      return;
    }

    this.adminService.deleteAdmin(adminID).subscribe(()=>{
      this.ngOnInit();
    });
  }

  createAdmin() {
    const admin = this.createForm.value;

    this.adminService.saveAdmin(admin).subscribe((data: any) => {
      console.log(data);
      this.showCreateAdmin = false;
      this.createForm.reset();
      this.ngOnInit();
    });
  }

}
