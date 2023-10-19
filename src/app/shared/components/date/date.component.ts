import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent {
  date = new Date();
  day = this.date.getDate();
  today = this.date.getDay();
  month = this.date.getMonth();
  year = this.date.getFullYear();
}
