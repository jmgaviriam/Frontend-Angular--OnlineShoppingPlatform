import { Observable } from 'rxjs';
import { UpdateProduct } from 'src/app/data/DTO/product/update-product';
import { UseCase } from '../../base/use-case';
import { CreateProduct } from 'src/app/data/DTO/product/create-product';
import { ProductRepository } from '../../repositories/product.repository';
import { ProductModel } from '../../models/product.model';

export class DeleteProductUseCase implements UseCase<string, ProductModel> {
  constructor(private ProductRepository: ProductRepository) {}
  execute(params: string): Observable<ProductModel> {
    return this.ProductRepository.DeleteProduct(params);
  }
}
