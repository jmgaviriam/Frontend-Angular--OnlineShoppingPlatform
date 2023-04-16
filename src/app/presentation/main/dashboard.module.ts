import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CustomerRoutingModule } from '../modules/customer/customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VendorRoutingModule } from '../modules/vendor/vendor-routing.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    CustomerRoutingModule,
    VendorRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class DashboardModule {}
