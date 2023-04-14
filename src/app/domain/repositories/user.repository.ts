import { Observable } from 'rxjs';
import { UserModel } from '../models';

export abstract class UserRepository {
  protected apiUrl: string = '';

  abstract CreateUser(user: UserModel): Observable<UserModel>;
  abstract GetUserById(uid: string): Observable<UserModel>;
  abstract UpdateUser(user: UserModel): Observable<UserModel>;
  abstract DeleteUser(uid: string): Observable<UserModel>;
}
