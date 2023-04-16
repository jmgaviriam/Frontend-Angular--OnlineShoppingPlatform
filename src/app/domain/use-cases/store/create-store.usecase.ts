import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { StoreRepository } from '../../repositories/store.repository';
import { CreateStore } from 'src/app/data/DTO/store/create-store.entity';

export class CreateStoreUseCase implements UseCase<CreateStore, CreateStore> {
  constructor(private StoreRepository: StoreRepository) {}
  execute(storeModel: CreateStore): Observable<CreateStore> {
    return this.StoreRepository.CreateStore(storeModel);
  }
}
