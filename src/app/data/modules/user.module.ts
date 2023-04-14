import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/app/domain/repositories';
import { CreateUserUseCase } from 'src/app/domain/use-cases/user/create-user.usecase';
import { DeleteUserUseCase } from 'src/app/domain/use-cases/user/delete-user.usecase';
import { GetUserByIdUseCase } from 'src/app/domain/use-cases/user/get-user-by-id.usercase';
import { UpdateUserUseCase } from 'src/app/domain/use-cases/user/update-user.usecase';
import { UserImplementationRepository } from '../repositories/user/user-implementation.repository';

const createUserUseCaseFactory = (userRepo: UserRepository) =>
  new CreateUserUseCase(userRepo);
export const createUserUseCaseProvider = {
  provide: CreateUserUseCase,
  useFactory: createUserUseCaseFactory,
  deps: [UserRepository],
};

const deleteUserUseCaseFactory = (userRepo: UserRepository) =>
  new DeleteUserUseCase(userRepo);
export const deleteUserUseCaseProvider = {
  provide: DeleteUserUseCase,
  useFactory: deleteUserUseCaseFactory,
  deps: [UserRepository],
};

const getUserByIdUseCaseFactory = (userRepo: UserRepository) =>
  new GetUserByIdUseCase(userRepo);
export const getUserByIdUseCaseProvider = {
  provide: GetUserByIdUseCase,
  useFactory: getUserByIdUseCaseFactory,
  deps: [UserRepository],
};

const updateUserUseCaseFactory = (userRepo: UserRepository) =>
  new UpdateUserUseCase(userRepo);
export const updateUserUseCaseProvider = {
  provide: UpdateUserUseCase,
  useFactory: updateUserUseCaseFactory,
  deps: [UserRepository],
};

@NgModule({
  providers: [
    createUserUseCaseProvider,
    deleteUserUseCaseProvider,
    getUserByIdUseCaseProvider,
    updateUserUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class UserModule {}
