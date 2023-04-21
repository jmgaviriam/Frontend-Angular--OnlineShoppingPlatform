export interface OrderModel {
  orderId: string;
  userId: string;
  paymentId: string;
  orderDate: string;
  shippingDate: string;
  deliveryDate: string;
  shippingAddress: string;
  totalAmount: number;
  status: string;
  isCompleted: boolean;
}
