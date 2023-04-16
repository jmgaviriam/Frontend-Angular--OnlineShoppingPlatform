import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmStoreComponent } from './pages/adm-store/adm-store.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [AdmStoreComponent, ProductListComponent],
  imports: [CommonModule, VendorRoutingModule, SharedModule, HttpClientModule],
})
export class VendorModule {}
