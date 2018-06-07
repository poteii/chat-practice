import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User } from "firebase/app";
import { Profile } from '../../models/profile/profile.interface';
import { AuthProvider } from '../auth/auth';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';


@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>;

  profileList: AngularFireList<Profile>;

  constructor(private db: AngularFireDatabase, private auth: AuthProvider) {
  }

  //user => authenticated user of firebase, profile => current profile to save in database
  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.db.object('/profiles/' + user.uid);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  //เช็คว่า user นี้มีการบันทึก profile หรือยัง ถ้ามีแล้วก็จะทำการ return ไปที่ tabpage ถ้ายังก็จะ return ไปที่ editprofilepage
  getProfile(user: User) {
    this.profileObject = this.db.object('/profiles/' + user.uid);

    return this.profileObject.valueChanges();
  }

  searchUser(firstName: string) {
    const query = this.db.list('/profiles', ref => ref.orderByChild('firstName').equalTo(firstName));
    return query.valueChanges();

  }

  // getAuthenticatedUserProfile() {
  //   return this.auth.getAuthenticatedUser()
  //     .map(user => user.uid)
  //     .mergeMap(authId => this.db.object('profiles/' + authId)).take(1);
  // }

}
