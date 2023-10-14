import { Injectable } from '@angular/core';
import { Todo, TodoResponse } from './todos.models';
import { BehaviorSubject, finalize, map, tap } from 'rxjs';
import { TodosService } from './todos.service';

@Injectable({
    providedIn: 'root'
})
export class TodosStoreService {
    private todosSubject = new BehaviorSubject<Todo[]>([]);
    private isLoadingSubject = new BehaviorSubject<boolean>(false);

    constructor(private todosService: TodosService){}

    get todos$() {
        return this.todosSubject;
    }

    setTodos(todos: Todo[]) {
        this.todosSubject.next(todos);
    }

    get isLoading$() {
        return this.isLoadingSubject;
    }

    setIsLoading(isLoading: boolean) {
        this.isLoadingSubject.next(isLoading);
    }

    getTodos() {
        this.setIsLoading(true);
        return this.todosService.getTodos().pipe(
            map((res: TodoResponse) => res.todos),
            tap((res) => this.setTodos(res)),
            finalize(() => this.setIsLoading(false))
        );
    }

    addTodo(todo: Todo) {
        this.setIsLoading(true);
        return this.todosService.AddTodo(todo).pipe(
            tap((res) => {
                const todos = this.todosSubject.getValue();
                this.setTodos([...todos, res])
            }),
            finalize(() => this.setIsLoading(false))
        );
    }

    deleteTodo(todoId: number) {
        this.setIsLoading(true);
        return this.todosService.deleteTodo(todoId).pipe(
            tap(() => {
                const todos = this.todosSubject.getValue();
                this.setTodos(todos.filter(todo => todo.id !== todoId));
            }),
            finalize(() => this.setIsLoading(false))
        );
    }

    updateTodo(updatedTodo: Todo) {
        this.setIsLoading(true);
        return this.todosService.updateTodo(updatedTodo).pipe(
            tap(() => {
                const todos = this.todosSubject.getValue();
                this.setTodos(todos.map(todo => {
                    return todo.id === updatedTodo.id ? updatedTodo : todo;
                }));
            }),
            finalize(() => this.setIsLoading(false))
        );
    }
}