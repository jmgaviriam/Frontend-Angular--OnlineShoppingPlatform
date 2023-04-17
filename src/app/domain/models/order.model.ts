export interface OrderModel {
  orderId: string;
  userId: string;
  paymentId: string;
  orderDate: Date;
  shippingDate: Date;
  deliveredDate: Date;
  shippingAddress: string;
  totalAmount: number;
  status: string;
  isCompleted: boolean;
}
