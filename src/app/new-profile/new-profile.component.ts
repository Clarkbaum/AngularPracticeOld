import { Component, OnInit } from '@angular/core';
import {Profile} from '../shared/models/profile.model';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent {

  title = 'AngularFullStack';
  values = [];
  value = '';
  profile: Profile = new Profile();

  submit(event: any) {
    this.values.push(this.value);
    event.target.value = '';
  }

}
