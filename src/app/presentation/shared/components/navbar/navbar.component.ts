import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'sofka-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routeStores: string[];
  routeAdmStores: string[];
  firstName!: string | null;
  role!: string | null;

  constructor(private readonly auth$: AuthService, protected router: Router) {
    this.routeStores = ['dashboard/stores'];
    this.routeAdmStores = ['dashboard/admStore'];
  }

  ngOnInit(): void {
    if (localStorage.getItem('firstName') !== null) {
      this.firstName = localStorage.getItem('firstName');
    }
    this.role = localStorage.getItem('role');
  }

  logout(): void {
    this.auth$.SignOut();
  }

  redirectToDashboard(): void {
    this.router.navigate(['dashboard']);
  }
}
