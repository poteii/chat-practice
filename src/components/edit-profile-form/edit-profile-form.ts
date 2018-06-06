
import { DataProvider } from './../../providers/data/data';
import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';

import { Subscription } from 'rxjs/Subscription'
import { AuthProvider } from '../../providers/auth/auth';
import { User } from 'firebase/app';

@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy {

  profile = {} as Profile;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;


  @Output() saveProfileResult: EventEmitter<Boolean>;


  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
      this.saveProfileResult.emit(result);
    }

  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
