import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
    @Input() todo: any;

    constructor() { }

    ngOnInit(): void { }
}
