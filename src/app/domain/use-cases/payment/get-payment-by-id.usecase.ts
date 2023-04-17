import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { PaymentModel } from '../../models/payment.model';
import { PaymentRepository } from '../../repositories/payment.repository';

export class GetPaymentByIdUseCase implements UseCase<string, PaymentModel> {
  constructor(private PaymentRepository: PaymentRepository) {}
  execute(paymentId: string): Observable<PaymentModel> {
    return this.PaymentRepository.GetPaymentById(paymentId);
  }
}
