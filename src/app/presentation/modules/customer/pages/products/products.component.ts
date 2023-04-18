import { Component } from '@angular/core';
import { ProductModel } from 'src/app/domain/models/product.model';
import { GetProductsByStoreUseCase } from '../../../../../domain/use-cases/product/get-products-by-store.usecase';
import { OrderItemModel } from 'src/app/domain/models/order-item.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateOrderItemUseCase } from 'src/app/domain/use-cases/order-item/create-order-item.usecase';
import { CreateOrderItem } from 'src/app/data/DTO/order-item/create-order-item.entity';
import { CreatePayment } from 'src/app/data/DTO/payment/create-payment';
import { CreateOrder } from 'src/app/data/DTO/order/create-order';
import { CreateOrderUseCase } from 'src/app/domain/use-cases/order/create-order.usecase';
import { CreatePaymentUseCase } from 'src/app/domain/use-cases/payment/create-payment.usecase';
import { PaymentModel } from 'src/app/domain/models/payment.model';
import { OrderModel } from 'src/app/domain/models/order.model';

@Component({
  selector: 'sofka-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  //Product

  storeId: string | null = localStorage.getItem('storeId');
  productsList: ProductModel[] = [];

  //
  date: Date;
  //Order Item
  orderItems: CreateOrderItem[] = [];
  orderItem: CreateOrderItem;
  itemForm: FormGroup;
  showitemForm = false;

  //Payment
  payment: CreatePayment;
  showPaymentForm = false;
  paymentForm: FormGroup;

  //Order
  order: CreateOrder;

  constructor(
    private getProductsByStore: GetProductsByStoreUseCase,
    private createOrderItem: CreateOrderItemUseCase,
    private createPayment: CreatePaymentUseCase,
    private createOrder: CreateOrderUseCase
  ) {
    this.orderItem = {
      orderId: '',
      productId: '',
      quantity: 0,
      price: 0,
    };

    this.itemForm = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
    });

    this.payment = {
      paymentDate: new Date(),
      amount: 0,
      paymentMethod: '',
      cardNumber: '',
      cardHolderName: '',
      CVV: '',
      isCompleted: false,
    };

    this.paymentForm = new FormGroup({
      paymentMethod: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required]),
      cardHolderName: new FormControl('', [Validators.required]),
      CVV: new FormControl('', [Validators.required]),
    });

    this.date = new Date('2023-04-18T07:50:08.560Z');

    this.order = {
      userId: '',
      paymentId: '',
      orderDate: new Date('2023-04-18T07:50:08.560Z'),
      shippingDate: new Date(),
      deliveredDate: new Date(),
      shippingAddress: '',
      totalAmount: 0,
      status: '',
    };
  }

  ngOnInit(): void {
    if (this.storeId) {
      this.getProductsByStore.execute(this.storeId).subscribe({
        next: (products: ProductModel[]) => {
          this.productsList = products;
          console.log(this.productsList);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });
    }
  }

  addItem() {
    this.showitemForm = true;
  }

  updateOrder(quantity: number, product: ProductModel) {
    this.showitemForm = false;
    const orderItem: CreateOrderItem = {
      orderId: '',
      productId: product.productId,
      quantity: quantity,
      price: product.price,
    };
    this.itemForm.reset();
    console.log(orderItem);
    this.orderItems.push(orderItem);
    console.log(this.orderItems);
  }

  paymentProcess() {
    this.showPaymentForm = true;
  }

  generateOrder() {
    const date = new Date().toISOString();
    this.payment.paymentDate = new Date();
    this.payment.amount = this.orderItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    this.payment.paymentMethod = this.paymentForm.value.paymentMethod;
    this.payment.cardNumber = this.paymentForm.value.cardNumber;
    this.payment.cardHolderName = this.paymentForm.value.cardHolderName;
    this.payment.CVV = this.paymentForm.value.CVV;
    this.payment.isCompleted = true;

    console.log(this.payment);

    this.createPayment.execute(this.payment).subscribe({
      next: (payment: PaymentModel) => {
        this.order.paymentId = payment.paymentId;
        this.order.orderDate = new Date(2023, 3, 18, 0, 0, 0, 0);
        this.order.shippingDate = new Date(2023, 3, 18, 0, 0, 0, 0);
        this.order.deliveredDate = new Date(2023, 3, 18, 0, 0, 0, 0);
        this.order.shippingAddress = 'Calle 123';
        this.order.totalAmount = this.payment.amount;
        this.order.status = 'En proceso';
        this.order.userId = localStorage.getItem('userId') || '';
        console.log(payment);
        console.log(this.order);
        this.createOrder.execute(this.order).subscribe({
          next: (order: OrderModel) => {
            this.orderItems.forEach((item) => {
              item.orderId = order.orderId;
              this.createOrderItem.execute(item).subscribe({
                next: (orderItem: OrderItemModel) => {
                  console.log(orderItem);
                },
                error: (err) => {
                  console.log(err);
                },
                complete: () => {
                  console.log('Complete');
                },
              });
            });
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('Complete');
          },
        });
      },
    });
  }
}
