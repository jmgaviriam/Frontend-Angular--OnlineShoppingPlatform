export class CreateOrderItem {
  orderId: string;
  productId: string;
  quantity: number;
  price: number;

  constructor(
    orderId: string,
    productId: string,
    quantity: number,
    price: number
  ) {
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
}
