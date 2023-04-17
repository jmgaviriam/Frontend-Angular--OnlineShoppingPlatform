import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductRepository } from '../../repositories/product.repository';

export class SupplierPurchaseUseCase
  implements UseCase<{ uid: string; quantity: number }, string>
{
  constructor(private SupplierPurchaseRepository: ProductRepository) {}
  execute(params: { uid: string; quantity: number }): Observable<string> {
    return this.SupplierPurchaseRepository.SupplierPurchase(
      params.uid,
      params.quantity
    );
  }
}
