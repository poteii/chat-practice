import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.interface';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(event: LoginResponse) {
    if (!event.error) {
      this.toast.create({
        message: 'Welcome to Chat, ' + event.result.email,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfilePage');
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }

  }

}
