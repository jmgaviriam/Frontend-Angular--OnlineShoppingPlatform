import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { LayoutComponent } from './layout/layout.component';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    BackButtonComponent,
    FooterComponent,
    AccessDeniedComponent,
    LayoutComponent,
    ShowForRolesDirective,
  ],
  exports: [
    NavbarComponent,
    BackButtonComponent,
    FooterComponent,
    AccessDeniedComponent,
    LayoutComponent,
    ShowForRolesDirective,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
