import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { StoreModel } from '../../models/store.model';
import { StoreRepository } from '../../repositories/store.repository';

export class DeleteStoreUseCase implements UseCase<string, StoreModel> {
  constructor(private StoreRepository: StoreRepository) {}
  execute(uid: string): Observable<StoreModel> {
    return this.StoreRepository.DeleteStore(uid);
  }
}
