import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './presentation/components/app/app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CartComponent } from './presentation/components/cart/cart.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { HomeComponent } from './presentation/components/home/home.component';
import { LoginComponent } from './presentation/components/login/login.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { ProductDetailComponent } from './presentation/components/product-detail/product-detail.component';
import { ProductListComponent } from './presentation/components/product-list/product-list.component';
import { SignupComponent } from './presentation/components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from './services/auth/auth.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [LocalStorageService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
