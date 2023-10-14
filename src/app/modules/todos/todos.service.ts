import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Todo, TodoResponse } from './todos.models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(private httpService: HttpService){}

    getTodos(): Observable<TodoResponse> {
        return this.httpService.get('todos?limit=5');
    }

    AddTodo(todo: Todo): Observable<Todo> {
        return this.httpService.post('todos/add', {...todo, userId: 26});
    }

    updateTodo(todo: Todo) {
        const {id, userId, ...updatedTodo} = todo;
        return this.httpService.update(`todos/${id}`, updatedTodo);
    }

    deleteTodo(todoId: number) {
        return this.httpService.delete(`todos/${todoId}`);
    }

}