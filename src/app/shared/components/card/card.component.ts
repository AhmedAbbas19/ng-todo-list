import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
    @Output() searchBtnClicked = new EventEmitter<void>();
    @Output() addBtnClicked = new EventEmitter<void>();
    @Output() editBtnClicked = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }
}
