import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { UserModel } from '../../models';
import { UserRepository } from '../../repositories/user.repository';

export class UpdateUserUseCase implements UseCase<UserModel, UserModel> {
  constructor(private UserRepository: UserRepository) {}
  execute(userModel: UserModel): Observable<UserModel> {
    return this.UserRepository.UpdateUser(userModel);
  }
}
