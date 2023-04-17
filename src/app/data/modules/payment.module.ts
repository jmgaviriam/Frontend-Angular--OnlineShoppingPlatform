import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePayment } from '../DTO/payment/create-payment';
import { PaymentRepository } from 'src/app/domain/repositories/payment.repository';
import { CreatePaymentUseCase } from 'src/app/domain/use-cases/payment/create-payment.usecase';
import { DeletePaymentUseCase } from 'src/app/domain/use-cases/payment/delete-payment.usecase';
import { GetPaymentByIdUseCase } from 'src/app/domain/use-cases/payment/get-payment-by-id.usecase';
import { UpdatePaymentUseCase } from 'src/app/domain/use-cases/payment/update-payment.usecase';
import { PaymentImplementationRepository } from '../repositories/payment/payment-implementation.repository';
import { HttpClientModule } from '@angular/common/http';

const CreatePaymentUseCaseFactory = (paymentRepo: PaymentRepository) =>
  new CreatePaymentUseCase(paymentRepo);
export const CreatePaymentUseCaseProvider = {
  provide: CreatePaymentUseCase,
  useFactory: CreatePaymentUseCaseFactory,
  deps: [PaymentRepository],
};

const DeletePaymentUseCaseFactory = (paymentRepo: PaymentRepository) =>
  new DeletePaymentUseCase(paymentRepo);
export const DeletePaymentUseCaseProvider = {
  provide: DeletePaymentUseCase,
  useFactory: DeletePaymentUseCaseFactory,
  deps: [PaymentRepository],
};

const GetPaymentByIdUseCaseFactory = (paymentRepo: PaymentRepository) =>
  new GetPaymentByIdUseCase(paymentRepo);
export const GetPaymentByIdUseCaseProvider = {
  provide: GetPaymentByIdUseCase,
  useFactory: GetPaymentByIdUseCaseFactory,
  deps: [PaymentRepository],
};

const UpdatePaymentUseCaseFactory = (paymentRepo: PaymentRepository) =>
  new UpdatePaymentUseCase(paymentRepo);
export const UpdatePaymentUseCaseProvider = {
  provide: UpdatePaymentUseCase,
  useFactory: UpdatePaymentUseCaseFactory,
  deps: [PaymentRepository],
};

@NgModule({
  providers: [
    CreatePaymentUseCaseProvider,
    DeletePaymentUseCaseProvider,
    GetPaymentByIdUseCaseProvider,
    UpdatePaymentUseCaseProvider,
    {
      provide: PaymentRepository,
      useClass: PaymentImplementationRepository,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class PaymentModule {}
