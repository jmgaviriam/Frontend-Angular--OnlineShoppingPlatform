import { Observable } from 'rxjs';
import { CreatePayment } from 'src/app/data/DTO/payment/create-payment';
import { UseCase } from '../../base/use-case';
import { PaymentModel } from '../../models/payment.model';
import { PaymentRepository } from '../../repositories/payment.repository';

export class CreatePaymentUseCase
  implements UseCase<CreatePayment, PaymentModel>
{
  constructor(private paymentRepository: PaymentRepository) {}

  execute(request: CreatePayment): Observable<PaymentModel> {
    return this.paymentRepository.CreatePayment(request);
  }
}
