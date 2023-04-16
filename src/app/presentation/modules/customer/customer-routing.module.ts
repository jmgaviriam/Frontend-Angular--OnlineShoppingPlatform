import { NgModule } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { StoresComponent } from './pages/stores/stores.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HasRoleGuard } from '../../shared/guards/has-role.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'stores',
        component: StoresComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
