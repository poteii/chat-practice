import { LoginResponse } from './../../models/login/login.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);

    } catch (e) {
      console.error(e);
      const error: LoginResponse = {
        error: e
      }

      this.loginStatus.emit(error);

    }
  }


  // navigateToPage(pageName: string) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

}
