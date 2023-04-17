import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItemModel } from 'src/app/domain/models/order-item.model';
import { OrderItemRepository } from 'src/app/domain/repositories/order-item.repository';
import { environment } from 'src/environments/environment';
import { CreateOrderItem } from '../../DTO/order-item/create-order-item.entity';
import { UpdateOrderItem } from '../../DTO/order-item/update-order-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderItemImplementationRepository extends OrderItemRepository {
  constructor(private http: HttpClient) {
    super();
  }

  CreateOrderItem(orderItem: CreateOrderItem): Observable<OrderItemModel> {
    return this.http.post<OrderItemModel>(
      environment.urlApiOrderItems,
      orderItem
    );
  }
  GetOrderItemById(orderItemId: string): Observable<OrderItemModel> {
    return this.http.get<OrderItemModel>(
      environment.urlApiOrderItems + '?id=' + orderItemId
    );
  }
  UpdateOrderItem(orderItem: UpdateOrderItem): Observable<OrderItemModel> {
    return this.http.put<OrderItemModel>(
      environment.urlApiOrderItems,
      orderItem
    );
  }
  DeleteOrderItem(orderItemId: string): Observable<OrderItemModel> {
    return this.http.delete<OrderItemModel>(
      environment.urlApiOrderItems + orderItemId
    );
  }
}
