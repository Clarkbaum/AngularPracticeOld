import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent {
  title = 'AngularFullStack';
  values = [];
  value = '';

  onKey(event: any) {
    if (event.key !== 'Enter') {
      this.value = event.target.value;
    }
  }

  submit(event: any) {
    this.values.push(this.value);
    event.target.value = '';
  }
}
