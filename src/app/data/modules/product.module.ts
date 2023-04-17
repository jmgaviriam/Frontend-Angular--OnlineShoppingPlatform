import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from 'src/app/domain/repositories/product.repository';
import { CreateProductUseCase } from 'src/app/domain/use-cases/product/create-product.usecase';
import { DeleteProductUseCase } from 'src/app/domain/use-cases/product/delete-product.usecase';
import { GetProductByIdUseCase } from 'src/app/domain/use-cases/product/get-product-by-id.usecase';
import { UpdateProductUseCase } from 'src/app/domain/use-cases/product/update-product.usecase';
import { GetProductsByStoreUseCase } from 'src/app/domain/use-cases/product/get-products-by-store.usecase';
import { SupplierPurchaseUseCase } from '../../domain/use-cases/product/supplier-purchase.usecase';
import { CustomerSaleUseCase } from 'src/app/domain/use-cases/product/customer-sale.usecase';
import { ProductImplementationRepository } from '../repositories/product/product-implementation.repository';
import { HttpClientModule } from '@angular/common/http';

const createProductUseCaseFactory = (productRepo: ProductRepository) =>
  new CreateProductUseCase(productRepo);
export const createProductUseCaseProvider = {
  provide: CreateProductUseCase,
  useFactory: createProductUseCaseFactory,
  deps: [ProductRepository],
};

const deleteProductUseCaseFactory = (productRepo: ProductRepository) =>
  new DeleteProductUseCase(productRepo);
export const deleteProductUseCaseProvider = {
  provide: DeleteProductUseCase,
  useFactory: deleteProductUseCaseFactory,
  deps: [ProductRepository],
};

const getProductByIdUseCaseFactory = (productRepo: ProductRepository) =>
  new GetProductByIdUseCase(productRepo);
export const getProductByIdUseCaseProvider = {
  provide: GetProductByIdUseCase,
  useFactory: getProductByIdUseCaseFactory,
  deps: [ProductRepository],
};

const updateProductUseCaseFactory = (productRepo: ProductRepository) =>
  new UpdateProductUseCase(productRepo);
export const updateProductUseCaseProvider = {
  provide: UpdateProductUseCase,
  useFactory: updateProductUseCaseFactory,
  deps: [ProductRepository],
};

const getProductsByStoreUseCaseFactory = (productRepo: ProductRepository) =>
  new GetProductsByStoreUseCase(productRepo);
export const getProductsByStoreUseCaseProvider = {
  provide: GetProductsByStoreUseCase,
  useFactory: getProductsByStoreUseCaseFactory,
  deps: [ProductRepository],
};

const supplierPurchaseUseCaseFactory = (productRepo: ProductRepository) =>
  new SupplierPurchaseUseCase(productRepo);
export const supplierPurchaseUseCaseProvider = {
  provide: SupplierPurchaseUseCase,
  useFactory: supplierPurchaseUseCaseFactory,
  deps: [ProductRepository],
};

const customerSaleUseCaseFactory = (productRepo: ProductRepository) =>
  new CustomerSaleUseCase(productRepo);
export const customerSaleUseCaseProvider = {
  provide: CustomerSaleUseCase,
  useFactory: customerSaleUseCaseFactory,
  deps: [ProductRepository],
};

@NgModule({
  providers: [
    createProductUseCaseProvider,
    deleteProductUseCaseProvider,
    getProductByIdUseCaseProvider,
    updateProductUseCaseProvider,
    getProductsByStoreUseCaseProvider,
    supplierPurchaseUseCaseProvider,
    customerSaleUseCaseProvider,
    { provide: ProductRepository, useClass: ProductImplementationRepository },
  ],
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class ProductModule {}
