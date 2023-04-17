import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './pages/cart/cart.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [StoresComponent, CartComponent, ProductsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class CustomerModule {}
