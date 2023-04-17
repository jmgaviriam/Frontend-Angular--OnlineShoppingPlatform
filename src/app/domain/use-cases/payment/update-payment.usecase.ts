import { Observable } from 'rxjs';
import { UpdatePayment } from 'src/app/data/DTO/payment/update-payment';
import { UseCase } from '../../base/use-case';
import { PaymentRepository } from '../../repositories/payment.repository';
import { PaymentModel } from '../../models/payment.model';

export class UpdatePaymentUseCase
  implements UseCase<UpdatePayment, PaymentModel>
{
  constructor(private paymentRepository: PaymentRepository) {}
  execute(request: UpdatePayment): Observable<PaymentModel> {
    return this.paymentRepository.UpdatePayment(request);
  }
}
