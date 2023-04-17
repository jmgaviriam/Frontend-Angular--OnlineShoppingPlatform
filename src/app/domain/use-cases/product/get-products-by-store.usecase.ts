import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductModel } from '../../models/product.model';
import { ProductRepository } from '../../repositories/product.repository';

export class GetProductsByStoreUseCase
  implements UseCase<string, ProductModel[]>
{
  constructor(private ProductRepository: ProductRepository) {}
  execute(uid: string): Observable<ProductModel[]> {
    return this.ProductRepository.GetProductsByStore(uid);
  }
}
