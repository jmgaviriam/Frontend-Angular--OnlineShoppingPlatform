export interface OrderItemModel {
  orderItemId: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  isDeleted: boolean;
}
