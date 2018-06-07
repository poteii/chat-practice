import { Profile } from './../../models/profile/profile.interface';
import { Component, Output, EventEmitter } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataProvider) {
    this.selectedProfile = new EventEmitter<Profile>();
  }


  searchUser(query: string) {
    const trimmedQuery = query.trim()
    if (trimmedQuery === query) {
      this.data.searchUser(query).subscribe((profiles: Profile[]) => {
        console.log(profiles);
        this.profileList = profiles;
      })
    }
  }

  selectProfile(profile) {
    this.selectedProfile.emit(profile);
  }

}
