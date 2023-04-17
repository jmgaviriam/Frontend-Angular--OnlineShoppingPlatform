export interface PaymentModel {
  paymentId: string;
  paymentDate: Date;
  amount: number;
  paymentMehtod: string;
  cardNumber: string;
  cardHolderName: string;
  CVV: string;
  isCompleted: boolean;
}
