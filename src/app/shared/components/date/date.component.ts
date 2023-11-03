import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent {
  date = new Date();
  today = this.date.getDay();
  day = this.date.getDate();
  month = this.date.getMonth();
  year = this.date.getFullYear();
}
