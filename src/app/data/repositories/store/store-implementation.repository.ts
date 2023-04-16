import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreModel } from 'src/app/domain/models/store.model';
import { environment } from 'src/environments/environment';
import { CreateStore } from '../../DTO/store/create-store.entity';
import { UpdateStore } from '../../DTO/store/update-store';
import { StoreRepository } from 'src/app/domain/repositories/store.repository';

@Injectable({
  providedIn: 'root',
})
export class StoreImplementationRepository extends StoreRepository {
  constructor(private http: HttpClient) {
    super();
  }

  GetStores(): Observable<StoreModel[]> {
    return this.http.get<StoreModel[]>(environment.urlApiStores + '/GetStores');
  }

  CreateStore(store: CreateStore): Observable<CreateStore> {
    return this.http.post<CreateStore>(environment.urlApiStores, store);
  }

  GetStoreById(uid: string): Observable<StoreModel> {
    return this.http.get<StoreModel>(environment.urlApiStores + '?id=' + uid);
  }

  UpdateStore(store: UpdateStore): Observable<CreateStore> {
    return this.http.put<UpdateStore>(environment.urlApiStores, store);
  }

  DeleteStore(uid: string): Observable<StoreModel> {
    return this.http.delete<StoreModel>(environment.urlApiStores + uid);
  }
}
