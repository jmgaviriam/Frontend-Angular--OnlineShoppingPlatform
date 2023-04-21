import { Observable } from 'rxjs';
import { OrderModel } from '../models/order.model';
import { CreateOrder } from 'src/app/data/DTO/order/create-order';
import { UpdateOrder } from 'src/app/data/DTO/order/update-order';

export abstract class OrderRepository {
  protected apiUrl: string = '';

  abstract CreateOrder(order: CreateOrder): Observable<OrderModel>;
  abstract GetOrderById(uid: string): Observable<OrderModel>;
  abstract UpdateOrder(order: UpdateOrder): Observable<OrderModel>;
  abstract DeleteOrder(uid: string): Observable<OrderModel>;
  abstract OrdersByUser(uid: string): Observable<OrderModel[]>;
}
