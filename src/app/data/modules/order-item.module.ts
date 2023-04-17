import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { OrderItemRepository } from 'src/app/domain/repositories/order-item.repository';
import { CreateOrderItemUseCase } from 'src/app/domain/use-cases/order-item/create-order-item.usecase';
import { DeleteOrderItemUseCase } from 'src/app/domain/use-cases/order-item/delete-order-item.usecase';
import { GetOrderItemByIdUseCase } from 'src/app/domain/use-cases/order-item/get-order-item-by-id.usecase';
import { UpdateOrderItemUseCase } from 'src/app/domain/use-cases/order-item/update-order-item.usecase';
import { OrderItemImplementationRepository } from '../repositories/order-item/order-item-implementation.repository';
import { NgModule } from '@angular/core';

const createOrderItemUseCaseFactory = (
  orderItemRepository: OrderItemRepository
) => new CreateOrderItemUseCase(orderItemRepository);
export const createOrderItemUseCaseProvider = {
  provide: CreateOrderItemUseCase,
  useFactory: createOrderItemUseCaseFactory,
  deps: [OrderItemRepository],
};

const deleteOrderItemUseCaseFactory = (
  orderItemRepository: OrderItemRepository
) => new DeleteOrderItemUseCase(orderItemRepository);
export const deleteOrderItemUseCaseProvider = {
  provide: DeleteOrderItemUseCase,
  useFactory: deleteOrderItemUseCaseFactory,
  deps: [OrderItemRepository],
};

const getOrderItemByIdUseCaseFactory = (
  orderItemRepository: OrderItemRepository
) => new GetOrderItemByIdUseCase(orderItemRepository);
export const getOrderItemByIdUseCaseProvider = {
  provide: GetOrderItemByIdUseCase,
  useFactory: getOrderItemByIdUseCaseFactory,
  deps: [OrderItemRepository],
};

const updateOrderItemUseCaseFactory = (
  orderItemRepository: OrderItemRepository
) => new UpdateOrderItemUseCase(orderItemRepository);
export const updateOrderItemUseCaseProvider = {
  provide: UpdateOrderItemUseCase,
  useFactory: updateOrderItemUseCaseFactory,
  deps: [OrderItemRepository],
};

@NgModule({
  providers: [
    createOrderItemUseCaseProvider,
    deleteOrderItemUseCaseProvider,
    getOrderItemByIdUseCaseProvider,
    updateOrderItemUseCaseProvider,
    {
      provide: OrderItemRepository,
      useClass: OrderItemImplementationRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class OrderItemModule {}
