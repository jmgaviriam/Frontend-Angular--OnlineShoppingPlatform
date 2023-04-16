import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { StoreModel } from '../../models/store.model';
import { StoreRepository } from '../../repositories/store.repository';

export class GetStoresUseCase implements UseCase<void, StoreModel[]> {
  constructor(private StoreRepository: StoreRepository) {}
  execute(): Observable<StoreModel[]> {
    return this.StoreRepository.GetStores();
  }
}
