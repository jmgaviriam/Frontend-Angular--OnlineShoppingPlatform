export class UpdateOrderItem {
  orderItemId: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  isDeleted: boolean;

  constructor(
    orderItemId: string,
    orderId: string,
    productId: string,
    quantity: number,
    price: number,
    isDeleted: boolean
  ) {
    this.orderItemId = orderItemId;
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
    this.isDeleted = isDeleted;
  }
}
