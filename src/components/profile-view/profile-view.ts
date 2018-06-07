import { Profile } from './../../models/profile/profile.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from 'firebase/app';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {


  private authUser: User;
  public userProfile: Profile;

  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;


  constructor(private data: DataProvider, private auth: AuthProvider, private loading: LoadingController) {

    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: 'Loading profile'
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe(
      (auth) => {
        this.authUser = auth;
        this.data.getProfile(this.authUser).subscribe(
          (profile: Profile) => {
            this.userProfile = profile;
            this.existingProfile.emit(this.userProfile);
            this.loader.dismiss();
          }
        )
      }
    )
  }

}
