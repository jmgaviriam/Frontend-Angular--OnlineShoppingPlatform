/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthProvider } from 'firebase/auth';
import { LocalStorageService } from 'ngx-webstorage';

/**
 * Servicio de autenticación de usuarios.
 *
 * @class
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // public get localStorage(): LocalStorageService {
  //   return this._localStorage;
  // }
  // public set localStorage(value: LocalStorageService) {
  //   this._localStorage = value;
  // }
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
  constructor(
    public afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth,
    public ngZone: NgZone
  ) {}

  /**
   * Inicio de sesión con correo electrónico y contraseña.
   *
   * @param {string} email - Dirección de correo electrónico.
   * @param {string} password - Contraseña.
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  SignIn(email: string, password: string): Promise<void> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid as string);
        localStorage.setItem('displayName', result.user?.displayName as string);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['todo-list']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /**
   * Registro de usuario con correo electrónico y contraseña.
   *
   * @param {string} email - Dirección de correo electrónico.
   * @param {string} password - Contraseña.
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
        this.SendVerificationMail();
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid as string);
      })
      .catch((error) => {
        window.alert(error.message);
      });
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
  GoogleAuth() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['todo-list']);
    });
  }

  /**
   * Inicio de sesión con proveedores de autenticación de terceros.
   *
   * @private
   * @param {AuthProvider} provider - Proveedor de autenticación.
   * @returns {Promise} - Promesa que devuelve un objeto de usuario.
   */
  private AuthLogin(provider: AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['todo-list']);
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid', result.user?.uid as string);
        localStorage.setItem('displayName', result.user?.displayName as string);

        //this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /**
   * Cierre de sesión de usuario.
   *
   * @returns {Promise} - Promesa que devuelve nada.
   */
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('uid');
      localStorage.removeItem('user');
      localStorage.removeItem('displayName');
      this.router.navigate(['login']);
    });
  }
}
