export class CreateOrder {
  userId: string;
  paymentId: string;
  orderDate: string;
  shippingDate: string;
  deliveryDate: string;
  shippingAddress: string;
  totalAmount: number;
  status: string;

  constructor(
    userId: string,
    paymentId: string,
    orderDate: string,
    shippingDate: string,
    deliveryDate: string,
    shippingAddress: string,
    totalAmount: number,
    status: string
  ) {
    this.userId = userId;
    this.paymentId = paymentId;
    this.orderDate = orderDate;
    this.shippingDate = shippingDate;
    this.deliveryDate = deliveryDate;
    this.shippingAddress = shippingAddress;
    this.totalAmount = totalAmount;
    this.status = status;
  }
}
