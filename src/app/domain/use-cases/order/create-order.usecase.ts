import { Observable } from 'rxjs';
import { CreateOrder } from '../../../data/DTO/order/create-order';
import { UseCase } from '../../base/use-case';
import { OrderModel } from '../../models/order.model';
import { OrderRepository } from '../../repositories/order.repository';

export class CreateOrderUseCase implements UseCase<CreateOrder, OrderModel> {
  constructor(private OrderRepository: OrderRepository) {}
  execute(order: CreateOrder): Observable<OrderModel> {
    return this.OrderRepository.CreateOrder(order);
  }
}
