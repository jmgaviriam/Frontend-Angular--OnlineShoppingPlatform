import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/domain/base/enums';

@Component({
  selector: 'sofka-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  allowToAccess: boolean;
  role?: number;
  constructor() {
    this.allowToAccess = true;
    this.role = parseInt(localStorage.getItem('role') ?? '1');
  }

  ngOnInit() {
    // if (this.role === Roles.Customer) {
    //   this.allowToAccess = false;
    // }
  }
}
