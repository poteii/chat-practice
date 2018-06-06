import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login.interface';

@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) {

  }

  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse>{
        error: e
      }
    }
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse>{
        error: e
      }
    }
  }

  getAuthenticatedUser() {
    return this.afAuth.authState;
  }
}
