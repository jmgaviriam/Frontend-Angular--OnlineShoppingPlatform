import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserUseCase } from 'src/app/domain/use-cases/user/create-user.usecase';
import { StoreRepository } from 'src/app/domain/repositories/store.repository';
import { CreateStoreUseCase } from 'src/app/domain/use-cases/store/create-store.usecase';
import { DeleteStoreUseCase } from 'src/app/domain/use-cases/store/delete-store.usecase';
import { GetStoreByIdUseCase } from 'src/app/domain/use-cases/store/get-store-by-id.usercase';
import { UpdateStoreUseCase } from 'src/app/domain/use-cases/store/update-store.usecase';
import { StoreImplementationRepository } from '../repositories/store/store-implementation.repository';
import { HttpClientModule } from '@angular/common/http';
import { GetStoresUseCase } from 'src/app/domain/use-cases/store/get-stores.usecase';

const getStoresUseCaseFactory = (storeRepo: StoreRepository) =>
  new GetStoresUseCase(storeRepo);
export const getStoresUseCaseProvider = {
  provide: GetStoresUseCase,
  useFactory: getStoresUseCaseFactory,
  deps: [StoreRepository],
};

const createStoreUseCaseFactory = (storeRepo: StoreRepository) =>
  new CreateStoreUseCase(storeRepo);
export const createStoreUseCaseProvider = {
  provide: CreateStoreUseCase,
  useFactory: createStoreUseCaseFactory,
  deps: [StoreRepository],
};

const deleteStoreUseCaseFactory = (storeRepo: StoreRepository) =>
  new DeleteStoreUseCase(storeRepo);
export const deleteStoreUseCaseProvider = {
  provide: DeleteStoreUseCase,
  useFactory: deleteStoreUseCaseFactory,
  deps: [StoreRepository],
};

const getStoreByIdUseCaseFactory = (storeRepo: StoreRepository) =>
  new GetStoreByIdUseCase(storeRepo);
export const getStoreByIdUseCaseProvider = {
  provide: GetStoreByIdUseCase,
  useFactory: getStoreByIdUseCaseFactory,
  deps: [StoreRepository],
};

const updateStoreUseCaseFactory = (storeRepo: StoreRepository) =>
  new UpdateStoreUseCase(storeRepo);
export const updateStoreUseCaseProvider = {
  provide: UpdateStoreUseCase,
  useFactory: updateStoreUseCaseFactory,
  deps: [StoreRepository],
};

@NgModule({
  providers: [
    getStoresUseCaseProvider,
    createStoreUseCaseProvider,
    deleteStoreUseCaseProvider,
    getStoreByIdUseCaseProvider,
    updateStoreUseCaseProvider,

    { provide: StoreRepository, useClass: StoreImplementationRepository },
  ],
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class StoreModule {}
