import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(event: LoginResponse) {
    if (!event.error) {
      this.toastCtrl.create({
        message: 'Account successfully created',
        duration: 3000
      }).present();
    } else {
      this.toastCtrl.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
