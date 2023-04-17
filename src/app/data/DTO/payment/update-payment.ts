export class UpdatePayment {
  paymentId: string;
  paymentDate: Date;
  amount: number;
  paymentMehtod: string;
  cardNumber: string;
  cardHolderName: string;
  CVV: string;
  isCompleted: boolean;

  constructor(
    paymentId: string,
    paymentDate: Date,
    amount: number,
    paymentMehtod: string,
    cardNumber: string,
    cardHolderName: string,
    CVV: string,
    isCompleted: boolean
  ) {
    this.paymentId = paymentId;
    this.paymentDate = paymentDate;
    this.amount = amount;
    this.paymentMehtod = paymentMehtod;
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.CVV = CVV;
    this.isCompleted = isCompleted;
  }
}
