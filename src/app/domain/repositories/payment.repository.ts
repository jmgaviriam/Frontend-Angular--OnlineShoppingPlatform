import { Observable } from 'rxjs';
import { PaymentModel } from '../models/payment.model';
import { CreatePayment } from 'src/app/data/DTO/payment/create-payment';
import { UpdatePayment } from 'src/app/data/DTO/payment/update-payment';

export abstract class PaymentRepository {
  protected apiUrl: string = '';

  abstract CreatePayment(payment: CreatePayment): Observable<PaymentModel>;
  abstract GetPaymentById(uid: string): Observable<PaymentModel>;
  abstract UpdatePayment(payment: UpdatePayment): Observable<PaymentModel>;
  abstract DeletePayment(uid: string): Observable<PaymentModel>;
}
