import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../../models';
import { UserRepository } from '../../repositories/user.repository';

export class DeleteUserUseCase implements UseCase<string, UserModel> {
  constructor(private UserRepository: UserRepository) {}
  execute(uid: string): Observable<UserModel> {
    return this.UserRepository.DeleteUser(uid);
  }
}
