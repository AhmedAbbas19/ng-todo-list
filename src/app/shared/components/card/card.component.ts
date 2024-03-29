import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Output() searchBtnClicked = new EventEmitter<void>();
  @Output() addBtnClicked = new EventEmitter<void>();
  @Output() editBtnClicked = new EventEmitter<void>();
}
