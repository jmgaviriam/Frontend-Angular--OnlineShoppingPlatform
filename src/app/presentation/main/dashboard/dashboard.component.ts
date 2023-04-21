import { Component, OnInit } from '@angular/core';
import { CreateOrder } from 'src/app/data/DTO/order/create-order';
import { OrderModel } from 'src/app/domain/models/order.model';
import { CreateOrderUseCase } from 'src/app/domain/use-cases/order/create-order.usecase';
import { OrdersByUserUseCase } from 'src/app/domain/use-cases/order/orders-by-user.usecase';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ordersList: OrderModel[];

  constructor(
    private readonly authService: AuthService,
    private readonly OrdersByUser: OrdersByUserUseCase
  ) {
    this.ordersList = [];
  }

  ngOnInit(): void {
    this.getOrdersList();
    console.log(this.ordersList);
  }

  logout(): void {
    this.authService.SignOut();
  }

  getOrdersList(): void {
    let userId = localStorage.getItem('userId');
    if (userId) {
      try {
        let get = this.OrdersByUser.execute(userId).subscribe({
          next: (orders: OrderModel[]) => {
            this.ordersList = orders;
            console.log(this.ordersList);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('Complete');
          },
        });
        setTimeout(() => {
          get.unsubscribe();
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
