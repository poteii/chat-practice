
import { DataProvider } from './../../providers/data/data';
import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';

import { Subscription } from 'rxjs/Subscription'
import { AuthProvider } from '../../providers/auth/auth';
import { User } from 'firebase/app';

@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  // profile = {} as Profile;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;


  @Output() saveProfileResult: EventEmitter<Boolean>;


  //for edit and add implement OnInit
  @Input() profile: Profile;


  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  ngOnInit(): void {
    if (!this.profile) {
      this.profile = {} as Profile;
    }
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
