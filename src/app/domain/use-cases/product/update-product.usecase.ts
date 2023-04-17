import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductModel } from '../../models/product.model';
import { ProductRepository } from '../../repositories/product.repository';
import { CreateProduct } from 'src/app/data/DTO/product/create-product';
import { UpdateProduct } from 'src/app/data/DTO/product/update-product';

export class UpdateProductUseCase
  implements UseCase<UpdateProduct, CreateProduct>
{
  constructor(private ProductRepository: ProductRepository) {}
  execute(params: UpdateProduct): Observable<CreateProduct> {
    return this.ProductRepository.UpdateProduct(params);
  }
}
