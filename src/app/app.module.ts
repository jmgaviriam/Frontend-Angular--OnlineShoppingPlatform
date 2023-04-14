import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './presentation/main/app/app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CartComponent } from './presentation/modules/customer/pages/cart/cart.component';
import { FooterComponent } from './presentation/shared/components/footer/footer.component';
import { HomeComponent } from './presentation/main/home/home.component';
import { LoginComponent } from './presentation/main/login/login.component';
import { NavbarComponent } from './presentation/shared/components/navbar/navbar.component';
import { ProductDetailComponent } from './presentation/shared/pages/product-detail/product-detail.component';
import { ProductListComponent } from './presentation/modules/vendor/pages/product-list/product-list.component';
import { SignupComponent } from './presentation/main/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from './services/auth/auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { UserModule } from './data/modules/user.module';
import { AdmStoreComponent } from './presentation/modules/vendor/pages/adm-store/adm-store.component';
import { StoresComponent } from './presentation/modules/customer/pages/stores/stores.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProductDetailComponent,
    ProductListComponent,
    SignupComponent,
    AdmStoreComponent,
    StoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [LocalStorageService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
