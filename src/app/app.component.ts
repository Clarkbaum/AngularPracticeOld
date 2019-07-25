import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
