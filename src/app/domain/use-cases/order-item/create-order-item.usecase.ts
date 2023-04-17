import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderItemModel } from '../../models/order-item.model';
import { OrderItemRepository } from '../../repositories/order-item.repository';
import { CreateOrderItem } from 'src/app/data/DTO/order-item/create-order-item.entity';

export class CreateOrderItemUseCase
  implements UseCase<OrderItemModel, OrderItemModel>
{
  constructor(private orderItemRepository: OrderItemRepository) {}

  execute(orderItem: CreateOrderItem): Observable<OrderItemModel> {
    return this.orderItemRepository.CreateOrderItem(orderItem);
  }
}
