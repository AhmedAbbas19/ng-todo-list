import { TodosService } from './../todos.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todos.models';
import { TodosStoreService } from '../todos.store.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Input() searchKey: string;
    @Input() inEditMode: boolean;
    @Output() editBtnClicked = new EventEmitter<void>();


    constructor(private todosStore: TodosStoreService) { }

    ngOnInit(): void { }

    onCompleteClick() {
        const todo: Todo = {...this.todo, completed: !this.todo.completed};
        this.todosStore.updateTodo(todo).subscribe();
    }

    onDeleteClick() {
        this.todosStore.deleteTodo(this.todo.id || 0).subscribe();
    }
}
