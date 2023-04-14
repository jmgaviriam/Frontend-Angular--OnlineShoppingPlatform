import { Component, OnInit } from '@angular/core';
import { UserTypeService } from 'src/app/services/user-type/user-type.service';

@Component({
  selector: 'sofka-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private userTypeService: UserTypeService) {}

  setCustomer(): void {
    this.userTypeService.setUserType('Customer');
  }

  setVendor(): void {
    this.userTypeService.setUserType('Vendor');
  }
}
