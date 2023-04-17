import { Observable } from 'rxjs';
import { CreateOrderItem } from 'src/app/data/DTO/order-item/create-order-item.entity';
import { UpdateOrderItem } from 'src/app/data/DTO/order-item/update-order-item';
import { OrderItemModel } from '../models/order-item.model';

export abstract class OrderItemRepository {
  protected apiUrl: string = '';

  abstract CreateOrderItem(
    orderItem: CreateOrderItem
  ): Observable<OrderItemModel>;
  abstract GetOrderItemById(orderItemId: string): Observable<OrderItemModel>;
  abstract UpdateOrderItem(
    orderItem: UpdateOrderItem
  ): Observable<OrderItemModel>;
  abstract DeleteOrderItem(orderItemId: string): Observable<OrderItemModel>;
}
