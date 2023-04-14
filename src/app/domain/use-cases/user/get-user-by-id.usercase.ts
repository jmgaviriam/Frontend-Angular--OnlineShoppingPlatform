import { UserRepository } from '../../repositories/user.repository';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../../models';
import { Observable } from 'rxjs';

export class GetUserByIdUseCase implements UseCase<string, UserModel> {
  constructor(private UserRepository: UserRepository) {}
  execute(id: string): Observable<UserModel> {
    return this.UserRepository.GetUserById(id);
  }
}
