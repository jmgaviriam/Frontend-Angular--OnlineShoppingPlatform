import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductRepository } from '../../repositories/product.repository';

export class CustomerSaleUseCase
  implements UseCase<{ uid: string; quantity: number }, string>
{
  constructor(private CustomerSaleRepository: ProductRepository) {}
  execute(params: { uid: string; quantity: number }): Observable<string> {
    return this.CustomerSaleRepository.CustomerSale(
      params.uid,
      params.quantity
    );
  }
}
