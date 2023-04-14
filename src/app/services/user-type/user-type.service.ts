import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  userType = new BehaviorSubject<string>('Customer');

  setUserType(type: string): void {
    this.userType.next(type);
  }

  getUserType(): string {
    return this.userType.value;
  }
}
