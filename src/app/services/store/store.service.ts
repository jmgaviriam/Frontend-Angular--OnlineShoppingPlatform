import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { ProductModel } from 'src/app/domain/models/product.model';

import { StoreModel } from 'src/app/domain/models/store.model';
import { GetStoreByIdUseCase } from 'src/app/domain/use-cases/store/get-store-by-id.usercase';
import { GetStoresUseCase } from 'src/app/domain/use-cases/store/get-stores.usecase';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  updateProduct(arg0: ProductModel) {
    throw new Error('Method not implemented.');
  }
  storesList: StoreModel[];

  constructor(
    private getStores: GetStoresUseCase,
    private getStoresById: GetStoreByIdUseCase
  ) {
    this.storesList = [];
  }

  getStoresList(): void {
    this.getStores.execute().subscribe({
      next: (stores: StoreModel[]) => {
        this.storesList = stores;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  getStoreById(storeId: string): Observable<StoreModel> {
    return this.getStoresById
      .execute(storeId)
      .pipe(map((store: StoreModel) => store));
  }

  getStoreByUserId(userId: string): StoreModel | undefined {
    return this.storesList.find((store) => store.userId === userId);
  }
}
