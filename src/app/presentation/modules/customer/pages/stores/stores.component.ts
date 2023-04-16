import { Component, OnInit } from '@angular/core';
import { StoreModel } from 'src/app/domain/models/store.model';
import { GetStoresUseCase } from '../../../../../domain/use-cases/store/get-stores.usecase';
import { GetStoreByIdUseCase } from '../../../../../domain/use-cases/store/get-store-by-id.usercase';

@Component({
  selector: 'sofka-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  routeDashboard = '/dashboard';

  storesList: StoreModel[];

  constructor(
    private getStores: GetStoresUseCase,
    private getStoresById: GetStoreByIdUseCase
  ) {
    this.storesList = [];
  }

  ngOnInit(): void {
    this.getStoresList();
  }

  getStoresList(): void {
    let get = this.getStores.execute().subscribe({
      next: (stores: StoreModel[]) => {
        this.storesList = stores;
        console.log(this.storesList);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
      },
    });
    setTimeout(() => {
      get.unsubscribe();
    }, 1000);
  }
}
