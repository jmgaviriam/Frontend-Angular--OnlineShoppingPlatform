import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthProvider } from 'firebase/auth';
import { GetUserByIdUseCase } from '../../domain/use-cases/user/get-user-by-id.usercase';
import { CreateUser } from '../../data/DTO/user/create-user';
import { UserModel } from 'src/app/domain/models';
import { CreateUserUseCase } from '../../domain/use-cases/user/create-user.usecase';
import { UserTypeService } from '../user-type/user-type.service';
import { SignupComponent } from 'src/app/presentation/main/signup/signup.component';

/**
 * Servicio de autenticación de usuarios.
 *
 * @class
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Constructor del servicio de autenticación.
   *
   * @constructor
   * @param {AngularFirestore} afs - Servicio de Firestore.
   * @param {Router} router - Servicio de enrutamiento.
   * @param {AngularFireAuth} afAuth - Servicio de autenticación de Firebase.
   * @param {NgZone} ngZone - Zona de detección de cambios de Angular.
   * @param {LocalStorageService} localStorage - Servicio de almacenamiento local.
   */

  userType: string;

  constructor(
    public afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth,
    public ngZone: NgZone,
    private getUserByIdUseCase: GetUserByIdUseCase,
    private createUserUseCase: CreateUserUseCase,
    private userTypeService: UserTypeService
  ) {
    this.userType = this.userTypeService.getUserType();
  }

  /**
   * Inicio de sesión con correo electrónico y contraseña.
   *
   * @param {string} email - Dirección de correo electrónico.
   * @param {string} password - Contraseña.
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      localStorage.setItem('userId', result.user?.uid as string);

      await new Promise((resolve) => setTimeout(resolve, 50));

      let userData!: UserModel;
      this.getUserByIdUseCase
        .execute(localStorage.getItem('userId') as string)
        .subscribe({
          next: (user) => {
            userData = user;
            console.log(userData);
          },
          error: (error) => {
            console.log(error);
          },
        });

      await new Promise((resolve) => setTimeout(resolve, 500));

      this.afAuth.authState.subscribe((user) => {
        if (user != undefined) {
          localStorage.setItem('firstName', userData.firstName);
          localStorage.setItem('lastName', userData.lastName);
          localStorage.setItem('email', userData.email);
          localStorage.setItem('password', userData.password);
          localStorage.setItem('role', userData.role);
          console.log(userData);
          setTimeout(() => {
            this.router.navigate(['dashboard']);
          }, 1500);
        }
      });
    } catch (error) {
      window.alert(error);
    }
  }

  /**
   * Registro de usuario con correo electrónico y contraseña.
   *
   * @param {string} email - Dirección de correo electrónico.
   * @param {string} password - Contraseña.
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  async SignUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const role = this.userTypeService.getUserType();
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      localStorage.setItem('userId', result.user?.uid as string);
      console.log(firstName);
      this.createUserUseCase
        .execute(
          new CreateUser(
            result.user?.uid as string,
            firstName,
            lastName,
            email,
            password,
            localStorage.getItem('role') as string
          )
        )
        .subscribe({
          next: (data) => {
            localStorage.setItem('firstName', data.firstName);
            localStorage.setItem('lastName', data.lastName);
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
            localStorage.setItem('role', data.role);
          },
          error: (error) => {
            console.log(error);
          },
        });
      setTimeout(() => {
        this.router.navigate(['product-list']);
      }, 1500);
    } catch (error) {
      window.alert(error);
    }
  }

  /**
   * Envío de correo electrónico de verificación para un usuario nuevo.
   *
   * @returns {Promise} - Promesa que devuelve nada.
   */
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  /**
   * Inicio de sesión con Google.
   *
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  async GoogleAuth() {
    const res = await this.AuthLogin(new auth.GoogleAuthProvider());
    setTimeout(() => {
      this.router.navigate(['product-list']);
    }, 2500);
  }

  /**
   * Inicio de sesión con proveedores de autenticación de terceros.
   *
   * @private
   * @param {AuthProvider} provider - Proveedor de autenticación.
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  private async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ClearLocalStorage();
      localStorage.setItem('user', JSON.stringify(result.user));
      console.log(result.user);
      localStorage.setItem('userId', result.user?.uid as string);
      console.log(result.user?.uid as string);

      await new Promise((resolve) => setTimeout(resolve, 50));

      let userData!: UserModel;
      console.log(userData);
      this.getUserByIdUseCase
        .execute(localStorage.getItem('userId') as string)
        .subscribe({
          next: (data) => {
            userData = data;
          },
          error: (error) => {
            console.log(error);
          },
        });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (userData != undefined) {
        localStorage.setItem('firstName', userData.firstName.toString());
        localStorage.setItem('lastName', userData.lastName.toString());
        localStorage.setItem('email', userData.email);
        localStorage.setItem('password', userData.password);
        localStorage.setItem('role', userData.role);
        console.log(userData);
        setTimeout(() => {
          this.router.navigate(['product-list']);
        }, 2500);
      } else {
        this.createUserUseCase
          .execute(
            new CreateUser(
              localStorage.getItem('userId') as string,
              result.user?.displayName as string,
              'apellido',
              result.user?.email as string,
              'password',
              this.userType
            )
          )
          .subscribe({
            next: (data) => {
              localStorage.setItem('firstName', data.firstName.toString());
              localStorage.setItem('lastName', data.lastName.toString());
              localStorage.setItem('email', data.email.toString());
              localStorage.setItem('password', data.password.toString());
              localStorage.setItem('role', data.role.toString());
              console.log(userData);
            },
            error: (error) => {
              console.log(error);
            },
          });
        setTimeout(() => {
          this.router.navigate(['product-list']);
        }, 2500);
      }
    } catch (error) {
      window.alert(error);
    }
  }

  /**
   * Cierre de sesión de usuario.
   *
   * @returns {Promise} - Promesa que devuelve nada.
   */
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
      this.ClearLocalStorage();
    });
  }

  ClearLocalStorage() {
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
  }
}
