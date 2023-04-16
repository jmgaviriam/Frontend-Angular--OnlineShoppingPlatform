import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeService } from 'src/app/services/user-type/user-type.service';

@Component({
  selector: 'sofka-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  login: string[];

  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {
    this.login = ['login'];
  }

  setCustomer(): void {
    this.userTypeService.setUserType('Customer');
    this.router.navigate(['login']);
  }

  setVendor(): void {
    this.userTypeService.setUserType('Vendor');
    this.router.navigate(['login']);
  }
}
