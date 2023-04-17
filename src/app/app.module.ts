import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './presentation/main/app/app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
import { UserModule } from './data/modules/user.module';
import { StoreModule } from './data/modules/store.module';
import { ProductModule } from './data/modules/product.module';
import { OrderModule } from './data/modules/order.module';
import { OrderItemModule } from './data/modules/order-item.module';
import { PaymentModule } from './data/modules/payment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    UserModule,
    StoreModule,
    ProductModule,
    OrderModule,
    OrderItemModule,
    PaymentModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
