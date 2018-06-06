import { Profile } from './../../models/profile/profile.interface';
import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from 'firebase/app';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;

  loader: Loading;


  constructor(private data: DataProvider, private auth: AuthProvider, private loading: LoadingController) {
    this.loader = this.loading.create({
      content: 'Loading profile'
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe(
      (user: User) => {
        this.data.getProfile(user).subscribe(
          (profile: Profile) => {
            this.userProfile = profile;
            this.loader.dismiss();
          }
        )
      }
    )
  }

}
