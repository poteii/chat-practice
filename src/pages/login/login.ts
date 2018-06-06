import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.interface';
import { DataProvider } from '../../providers/data/data';
import { User } from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController, private data: DataProvider) {
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

      this.data.getProfile(<User>event.result).subscribe(profile => {
        console.log(profile);
        profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      })

    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }

  }

}
