import { NgModule } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { StoresComponent } from './pages/stores/stores.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';

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
        path: 'products',
        component: ProductsComponent,
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
