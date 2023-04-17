import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentModel } from 'src/app/domain/models/payment.model';
import { PaymentRepository } from 'src/app/domain/repositories/payment.repository';
import { environment } from 'src/environments/environment';
import { CreatePayment } from '../../DTO/payment/create-payment';
import { UpdatePayment } from '../../DTO/payment/update-payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentImplementationRepository extends PaymentRepository {
  constructor(private http: HttpClient) {
    super();
  }

  CreatePayment(payment: CreatePayment): Observable<PaymentModel> {
    return this.http.post<PaymentModel>(environment.urlApiPayments, payment);
  }
  UpdatePayment(payment: UpdatePayment): Observable<PaymentModel> {
    return this.http.put<PaymentModel>(environment.urlApiPayments, payment);
  }

  GetPaymentById(paymentId: string): Observable<PaymentModel> {
    return this.http.get<PaymentModel>(
      environment.urlApiPayments + '?id=' + paymentId
    );
  }
  DeletePayment(paymentId: string): Observable<PaymentModel> {
    return this.http.delete<PaymentModel>(
      environment.urlApiPayments + paymentId
    );
  }
}
