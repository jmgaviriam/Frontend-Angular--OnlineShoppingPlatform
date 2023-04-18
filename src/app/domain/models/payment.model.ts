export interface PaymentModel {
  paymentId: string;
  paymentDate: Date;
  amount: number;
  paymentMethod: string;
  cardNumber: string;
  cardHolderName: string;
  CVV: string;
  isCompleted: boolean;
}
