import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/domain/models/order.model';
import { OrderRepository } from 'src/app/domain/repositories/order.repository';
import { environment } from 'src/environments/environment';
import { CreateOrder } from '../../DTO/order/create-order';
import { UpdateOrder } from '../../DTO/order/update-order';

@Injectable({
  providedIn: 'root',
})
export class OrderImplementationRepository extends OrderRepository {
  constructor(private http: HttpClient) {
    super();
  }

  OrdersByUser(uid: string): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(
      environment.urlApiOrders + '/ordersbyuser/' + uid
    );
  }

  CreateOrder(order: CreateOrder): Observable<OrderModel> {
    return this.http.post<OrderModel>(environment.urlApiOrders, order);
  }

  DeleteOrder(id: string): Observable<OrderModel> {
    return this.http.delete<OrderModel>(environment.urlApiOrders + id);
  }

  GetOrderById(id: string): Observable<OrderModel> {
    return this.http.get<OrderModel>(environment.urlApiOrders + '?id=' + id);
  }

  UpdateOrder(order: UpdateOrder): Observable<OrderModel> {
    return this.http.put<OrderModel>(environment.urlApiOrders, order);
  }
}
