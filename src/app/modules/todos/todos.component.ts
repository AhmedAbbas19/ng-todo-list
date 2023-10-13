import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos = [
        {
            id: '1',
            text: 'Buy new sweatshirt',
            done: true
        },
        {
            id: '2',
            text: 'Read an article',
            done: true
        },
        {
            id: '3',
            text: 'Try not to fall asleep',
            done: false
        },
        {
            id: '4',
            text: 'Watch "Titanic" movie',
            done: false
        },
        {
            id: '5',
            text: 'Walk the dog',
            done: false
        },
        {
            id: '6',
            text: 'Buy some milk',
            done: false
        },
        {
            id: '7',
            text: 'Send mail to Elon Musk',
            done: false
        }
    ]

    constructor() { }

    ngOnInit(): void { }
}
