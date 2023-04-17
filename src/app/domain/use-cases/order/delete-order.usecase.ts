import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderRepository } from '../../repositories/order.repository';
import { OrderModel } from '../../models/order.model';

export class DeleteOrderUseCase implements UseCase<string, OrderModel> {
  constructor(private readonly orderRepository: OrderRepository) {}

  execute(request: string): Observable<OrderModel> {
    return this.orderRepository.DeleteOrder(request);
  }
}
