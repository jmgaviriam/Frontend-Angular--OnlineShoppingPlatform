export class CreateOrder {
  userId: string;
  paymentId: string;
  orderDate: Date;
  shippingDate: Date;
  deliveredDate: Date;
  shippingAddress: string;
  totalAmount: number;
  status: string;

  constructor(
    userId: string,
    paymentId: string,
    orderDate: Date,
    shippingDate: Date,
    deliveredDate: Date,
    shippingAddress: string,
    totalAmount: number,
    status: string
  ) {
    this.userId = userId;
    this.paymentId = paymentId;
    this.orderDate = orderDate;
    this.shippingDate = shippingDate;
    this.deliveredDate = deliveredDate;
    this.shippingAddress = shippingAddress;
    this.totalAmount = totalAmount;
    this.status = status;
  }
}
