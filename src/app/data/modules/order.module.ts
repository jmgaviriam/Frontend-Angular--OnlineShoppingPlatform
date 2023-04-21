import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRepository } from 'src/app/domain/repositories/order.repository';
import { CreateOrderUseCase } from 'src/app/domain/use-cases/order/create-order.usecase';
import { DeleteOrderUseCase } from 'src/app/domain/use-cases/order/delete-order.usecase';
import { UpdateOrderUseCase } from 'src/app/domain/use-cases/order/update-order.usecase';
import { GetOrderByIdUseCase } from 'src/app/domain/use-cases/order/get-order-by-id.usecase';
import { HttpClientModule } from '@angular/common/http';
import { OrderImplementationRepository } from '../repositories/order/order-implementation.repository';
import { OrdersByUserUseCase } from 'src/app/domain/use-cases/order/orders-by-user.usecase';

const createOrderUseCaseFactory = (orderRepo: OrderRepository) =>
  new CreateOrderUseCase(orderRepo);
export const createOrderUseCaseProvider = {
  provide: CreateOrderUseCase,
  useFactory: createOrderUseCaseFactory,
  deps: [OrderRepository],
};

const deleteOrderUseCaseFactory = (orderRepo: OrderRepository) =>
  new DeleteOrderUseCase(orderRepo);
export const deleteOrderUseCaseProvider = {
  provide: DeleteOrderUseCase,
  useFactory: deleteOrderUseCaseFactory,
  deps: [OrderRepository],
};

const getOrderByIdUseCaseFactory = (orderRepo: OrderRepository) =>
  new GetOrderByIdUseCase(orderRepo);
export const getOrderByIdUseCaseProvider = {
  provide: GetOrderByIdUseCase,
  useFactory: getOrderByIdUseCaseFactory,
  deps: [OrderRepository],
};

const updateOrderUseCaseFactory = (orderRepo: OrderRepository) =>
  new UpdateOrderUseCase(orderRepo);
export const updateOrderUseCaseProvider = {
  provide: UpdateOrderUseCase,
  useFactory: updateOrderUseCaseFactory,
  deps: [OrderRepository],
};

const orderByUserFactory = (orderRepo: OrderRepository) =>
  new OrdersByUserUseCase(orderRepo);
export const orderByUserProvider = {
  provide: OrdersByUserUseCase,
  useFactory: orderByUserFactory,
  deps: [OrderRepository],
};

@NgModule({
  providers: [
    createOrderUseCaseProvider,
    deleteOrderUseCaseProvider,
    getOrderByIdUseCaseProvider,
    updateOrderUseCaseProvider,
    orderByUserProvider,
    {
      provide: OrderRepository,
      useClass: OrderImplementationRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class OrderModule {}
