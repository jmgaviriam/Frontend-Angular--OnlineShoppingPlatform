import { Observable } from 'rxjs';
import { StoreModel } from '../models/store.model';
import { CreateStore } from 'src/app/data/DTO/store/create-store.entity';

export abstract class StoreRepository {
  protected apiUrl: string = '';

  abstract GetStores(): Observable<StoreModel[]>;
  abstract CreateStore(store: CreateStore): Observable<CreateStore>;
  abstract GetStoreById(uid: string): Observable<StoreModel>;
  abstract UpdateStore(store: StoreModel): Observable<CreateStore>;
  abstract DeleteStore(uid: string): Observable<StoreModel>;
}
