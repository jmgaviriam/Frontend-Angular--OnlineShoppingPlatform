import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { StoreModel } from '../../models/store.model';
import { StoreRepository } from '../../repositories/store.repository';
import { CreateStore } from 'src/app/data/DTO/store/create-store.entity';

export class UpdateStoreUseCase implements UseCase<StoreModel, CreateStore> {
  constructor(private StoreRepository: StoreRepository) {}
  execute(storeModel: StoreModel): Observable<CreateStore> {
    return this.StoreRepository.UpdateStore(storeModel);
  }
}
