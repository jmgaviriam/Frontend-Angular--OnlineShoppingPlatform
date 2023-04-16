import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/domain/models';
import { UserRepository } from 'src/app/domain/repositories';
import { environment } from 'src/environments/environment';
import { CreateUser } from '../../DTO/user/create-user';
import { UpdateUser } from '../../DTO/user/update-user';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }

  CreateUser(user: CreateUser): Observable<UserModel> {
    return this.http.post<CreateUser>(environment.urlApiUsers, user);
  }
  GetUserById(uid: string): Observable<UserModel> {
    return this.http.get<UserModel>(environment.urlApiUsers + '?id=' + uid);
  }
  UpdateUser(user: UpdateUser): Observable<UserModel> {
    return this.http.put<CreateUser>(environment.urlApiUsers, user);
  }
  DeleteUser(uid: string): Observable<UserModel> {
    return this.http.delete<UserModel>(environment.urlApiUsers + uid);
  }
}
