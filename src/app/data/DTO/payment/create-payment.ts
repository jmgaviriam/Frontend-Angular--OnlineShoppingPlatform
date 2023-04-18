export class CreatePayment {
  paymentDate: Date;
  amount: number;
  paymentMethod: string;
  cardNumber: string;
  cardHolderName: string;
  CVV: string;
  isCompleted: boolean;

  constructor(
    paymentDate: Date,
    amount: number,
    paymentMethod: string,
    cardNumber: string,
    cardHolderName: string,
    CVV: string,
    isCompleted: boolean
  ) {
    this.paymentDate = paymentDate;
    this.amount = amount;
    this.paymentMethod = paymentMethod;
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.CVV = CVV;
    this.isCompleted = isCompleted;
  }
}
