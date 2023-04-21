import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRoutingModule } from '../modules/customer/customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VendorRoutingModule } from '../modules/vendor/vendor-routing.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    CustomerRoutingModule,
    VendorRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class DashboardModule {}
