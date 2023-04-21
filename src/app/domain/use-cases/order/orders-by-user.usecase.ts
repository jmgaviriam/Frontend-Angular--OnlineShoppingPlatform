import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderModel } from '../../models/order.model';
import { OrderRepository } from '../../repositories/order.repository';

export class OrdersByUserUseCase implements UseCase<string, OrderModel[]> {
  constructor(private OrderRepository: OrderRepository) {}
  execute(uid: string): Observable<OrderModel[]> {
    return this.OrderRepository.OrdersByUser(uid);
  }
}
