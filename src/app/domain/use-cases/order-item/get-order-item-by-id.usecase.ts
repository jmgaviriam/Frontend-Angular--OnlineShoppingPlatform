import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderItemModel } from '../../models/order-item.model';
import { OrderItemRepository } from '../../repositories/order-item.repository';

export class GetOrderItemByIdUseCase
  implements UseCase<string, OrderItemModel>
{
  constructor(private OrderItemRepository: OrderItemRepository) {}

  execute(id: string): Observable<OrderItemModel> {
    return this.OrderItemRepository.GetOrderItemById(id);
  }
}
