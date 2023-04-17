import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderModel } from '../../models/order.model';
import { OrderRepository } from '../../repositories/order.repository';

export class UpdateOrderUseCase implements UseCase<OrderModel, OrderModel> {
  constructor(private OrderRepository: OrderRepository) {}
  execute(orderModel: OrderModel): Observable<OrderModel> {
    return this.OrderRepository.UpdateOrder(orderModel);
  }
}
