export class CreatePayment {
  paymentDate: Date;
  amount: number;
  paymentMehtod: string;
  cardNumber: string;
  cardHolderName: string;
  CVV: string;
  isCompleted: boolean;

  constructor(
    paymentDate: Date,
    amount: number,
    paymentMehtod: string,
    cardNumber: string,
    cardHolderName: string,
    CVV: string,
    isCompleted: boolean
  ) {
    this.paymentDate = paymentDate;
    this.amount = amount;
    this.paymentMehtod = paymentMehtod;
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.CVV = CVV;
    this.isCompleted = isCompleted;
  }
}
