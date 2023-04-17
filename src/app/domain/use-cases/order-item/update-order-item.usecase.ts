import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { OrderItemModel } from '../../models/order-item.model';
import { UpdateOrderItem } from 'src/app/data/DTO/order-item/update-order-item';
import { OrderItemRepository } from '../../repositories/order-item.repository';
export class UpdateOrderItemUseCase
  implements UseCase<UpdateOrderItem, OrderItemModel>
{
  constructor(private OrderItemRepository: OrderItemRepository) {}
  execute(orderItemModel: UpdateOrderItem): Observable<OrderItemModel> {
    return this.OrderItemRepository.UpdateOrderItem(orderItemModel);
  }
}
