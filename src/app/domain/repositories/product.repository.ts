import { Observable } from 'rxjs';
import { CreateProduct } from 'src/app/data/DTO/product/create-product';
import { ProductModel } from '../models/product.model';

export abstract class ProductRepository {
  protected apiUrl: string = '';

  abstract GetProductById(uid: string): Observable<ProductModel>;
  abstract UpdateProduct(product: ProductModel): Observable<CreateProduct>;
  abstract DeleteProduct(uid: string): Observable<ProductModel>;
  abstract CreateProduct(product: CreateProduct): Observable<CreateProduct>;

  abstract GetProductsByStore(uid: string): Observable<ProductModel[]>;
  abstract SupplierPurchase(uid: string, quantity: number): Observable<string>;
  abstract CustomerSale(uid: string, quantity: number): Observable<string>;
}
