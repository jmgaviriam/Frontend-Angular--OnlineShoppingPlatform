import { Observable } from 'rxjs';
import { CreateProduct } from 'src/app/data/DTO/product/create-product';
import { UseCase } from '../../base/use-case';
import { ProductRepository } from '../../repositories/product.repository';

export class CreateProductUseCase
  implements UseCase<CreateProduct, CreateProduct>
{
  constructor(private ProductRepository: ProductRepository) {}
  execute(productModel: CreateProduct): Observable<CreateProduct> {
    return this.ProductRepository.CreateProduct(productModel);
  }
}
