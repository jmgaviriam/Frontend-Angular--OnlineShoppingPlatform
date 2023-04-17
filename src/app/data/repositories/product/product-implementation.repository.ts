import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/domain/models/product.model';
import { ProductRepository } from 'src/app/domain/repositories/product.repository';
import { environment } from 'src/environments/environment';
import { CreateProduct } from '../../DTO/product/create-product';

@Injectable({
  providedIn: 'root',
})
export class ProductImplementationRepository extends ProductRepository {
  constructor(private http: HttpClient) {
    super();
  }

  override GetProductById(uid: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(
      environment.urlApiProducts + '?id=' + uid
    );
  }
  override UpdateProduct(product: ProductModel): Observable<CreateProduct> {
    return this.http.put<CreateProduct>(environment.urlApiProducts, product);
  }
  override DeleteProduct(uid: string): Observable<ProductModel> {
    return this.http.delete<ProductModel>(environment.urlApiProducts + uid);
  }
  override CreateProduct(product: CreateProduct): Observable<CreateProduct> {
    return this.http.post<CreateProduct>(environment.urlApiProducts, product);
  }
  override GetProductsByStore(uid: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(
      environment.urlApiProducts + '/productsbystore/' + uid
    );
  }
  override SupplierPurchase(uid: string, quantity: number): Observable<string> {
    return this.http.post<string>(
      environment.urlApiProducts +
        '/supplierpurchase/' +
        uid +
        '?quantity=' +
        quantity,
      { uid, quantity }
    );
  }
  override CustomerSale(uid: string, quantity: number): Observable<string> {
    return this.http.post<string>(
      environment.urlApiProducts +
        '/customersale/' +
        uid +
        '?quantity=' +
        quantity,
      { uid, quantity }
    );
  }
}
