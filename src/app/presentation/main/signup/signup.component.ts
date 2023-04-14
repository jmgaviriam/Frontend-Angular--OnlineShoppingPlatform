/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserTypeService } from 'src/app/services/user-type/user-type.service';

@Component({
  selector: 'sofka-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form: FormGroup;
  userType: string;
  constructor(
    public authService: AuthService,
    private userTypeService: UserTypeService
  ) {
    this.userType = this.userTypeService.getUserType();
    console.log('User type:', this.userType);

    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
        ),
      ]),
    });
  }

  auth(): void {
    this.authService.GoogleAuth();
  }

  login(): void {
    console.log(
      this.form.get('email')?.value,
      this.form.get('password')?.value
    );

    this.authService.SignIn(
      this.form.get('email')?.value,
      this.form.get('password')?.value
    );
  }

  signup(): void {
    console.log(
      this.form.get('firstName')?.value,
      this.form.get('lastName')?.value,
      this.form.get('email')?.value,
      this.form.get('password')?.value
    );
    this.authService.SignUp(
      this.form.get('firstName')?.value,
      this.form.get('lastName')?.value,
      this.form.get('email')?.value,
      this.form.get('password')?.value
    );
  }
}
