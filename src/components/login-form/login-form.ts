import { LoginResponse } from './../../models/login/login.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private auth: AuthProvider) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {

    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
    // try {
    //   const result: LoginResponse = {
    //     result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    //   }
    //   this.loginStatus.emit(result);

    // } catch (e) {
    //   console.error(e);
    //   const error: LoginResponse = {
    //     error: e
    //   }

    //   this.loginStatus.emit(error);

    // }
  }


  // navigateToPage(pageName: string) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

}
