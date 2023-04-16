import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard, allowedRoles } from '../../shared/guards/has-role.guard';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { AdmStoreComponent } from './pages/adm-store/adm-store.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { Roles } from 'src/app/domain/base/enums';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admStore',
        canLoad: [allowedRoles([Roles.Vendor])],
        component: AdmStoreComponent,
      },
      {
        path: 'productList',
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRoutingModule {}
