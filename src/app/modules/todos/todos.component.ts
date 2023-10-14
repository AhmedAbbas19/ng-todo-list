import { Component, OnInit } from '@angular/core';
import { TodosStoreService } from './todos.store.service';
import { Todo } from './todos.models';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    inSearchMode = false;
    inAddMode = false;
    inEditMode = false;

    updatingTodo: Todo | null;
    searchKey = '';

    constructor(public todosStore: TodosStoreService) { }
    
    ngOnInit(): void { 
        this.todosStore.getTodos().subscribe();
    }

    onAddTodo(value: string) {
        if (value) {
            const newTodo: Todo = { todo: value, completed: false}
            this.todosStore.addTodo(newTodo).subscribe();
        }
    }

    updateTodo(todo: Todo) {
        if (todo.todo) {
            this.updatingTodo = null;
            this.todosStore.updateTodo(todo).subscribe();
        }
    }

    onEditTodo(todo: Todo) {
        this.updatingTodo = {...todo};
        this.inAddMode = false;
        this.inSearchMode = false;
        this.searchKey = '';
    }

    onSearchBtnClick() {
        this.inSearchMode = true;
        this.inAddMode = false;
        this.updatingTodo = null;
    }

    onAddBtnClick() {
        this.inAddMode = true;
        this.inSearchMode = false;
        this.updatingTodo = null;
        this.searchKey = '';
    }

    onEditBtnClick() {
        this.inEditMode = !this.inEditMode;
        this.updatingTodo = null;
    }
}
