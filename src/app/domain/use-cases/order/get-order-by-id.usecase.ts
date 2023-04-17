import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderModel } from '../../models/order.model';
import { OrderRepository } from '../../repositories/order.repository';
export class GetOrderByIdUseCase implements UseCase<string, OrderModel> {
  constructor(private OrderRepository: OrderRepository) {}
  execute(id: string): Observable<OrderModel> {
    return this.OrderRepository.GetOrderById(id);
  }
}
