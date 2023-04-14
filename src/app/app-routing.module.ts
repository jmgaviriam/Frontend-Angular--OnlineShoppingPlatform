import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/main/home/home.component';
import { CartComponent } from './presentation/modules/customer/pages/cart/cart.component';
import { LoginComponent } from './presentation/main/login/login.component';
import { ProductDetailComponent } from './presentation/shared/pages/product-detail/product-detail.component';
import { ProductListComponent } from './presentation/modules/vendor/pages/product-list/product-list.component';
import { SignupComponent } from './presentation/main/signup/signup.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

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
    path: 'dashboard',
    loadChildren: () =>
      import('./presentation/main/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
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
