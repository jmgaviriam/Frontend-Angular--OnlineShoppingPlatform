import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderItemRepository } from '../../repositories/order-item.repository';
import { CreateOrderItem } from 'src/app/data/DTO/order-item/create-order-item.entity';

export class DeleteOrderItemUseCase
  implements UseCase<string, CreateOrderItem>
{
  constructor(private OrderItemRepository: OrderItemRepository) {}
  execute(orderItemId: string): Observable<CreateOrderItem> {
    return this.OrderItemRepository.DeleteOrderItem(orderItemId);
  }
}
