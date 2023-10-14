import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Todo, TodoResponse } from './todos.models';
import { Observable } from 'rxjs';
import { handleNotFoundIds } from 'src/app/core/utils/not-found-ids.util';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(private httpService: HttpService){}

    getTodos(): Observable<TodoResponse> {
        return this.httpService.get('todos?limit=5'); // limit the response to 5 todos as we don't care about the whole data for this project
    }

    AddTodo(todo: Todo): Observable<Todo> {
        return this.httpService.post('todos/add', {...todo, userId: 26}); // 26 is a random userId as we don't care about the user for this project
    }

    updateTodo(todo: Todo) {
        const {id, userId, ...updatedTodo} = todo;
        return this.httpService.update(`todos/${id}`, updatedTodo).pipe(handleNotFoundIds());
    }

    deleteTodo(todoId: number) {
        return this.httpService.delete(`todos/${todoId}`).pipe(handleNotFoundIds());
    }

}
