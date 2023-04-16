import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/modules/login/pages/home/home.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['home']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./presentation/modules/login/login.module').then(
        (m) => m.LoginModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./presentation/main/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
  },
  {
    path: 'dashboard/customer',
    loadChildren: () =>
      import('./presentation/modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
  },
  {
    path: 'dashboard/vendor',
    loadChildren: () =>
      import('./presentation/modules/vendor/vendor.module').then(
        (m) => m.VendorModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
