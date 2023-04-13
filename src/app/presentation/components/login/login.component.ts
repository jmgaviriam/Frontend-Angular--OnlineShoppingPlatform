/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'sofka-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    public readonly authService: AuthService,
    public fb: FormBuilder
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  auth(): void {
    this.authService.GoogleAuth();
  }

  // logout(): void {
  //   this.authService.SignOut();
  // }

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
}
