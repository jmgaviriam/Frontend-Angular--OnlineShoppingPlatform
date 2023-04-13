import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/components/home/home.component';
import { CartComponent } from './presentation/components/cart/cart.component';
import { LoginComponent } from './presentation/components/login/login.component';
import { ProductDetailComponent } from './presentation/components/product-detail/product-detail.component';
import { ProductListComponent } from './presentation/components/product-list/product-list.component';
import { SignupComponent } from './presentation/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
