import { Injectable } from '@angular/core';
import { Todo, TodoResponse } from './todos.models';
import { BehaviorSubject, finalize, map, tap } from 'rxjs';
import { TodosService } from './todos.service';
import { generateId } from 'src/app/core/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TodosStoreService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private todosService: TodosService) {}

  get todos$() {
    return this.todosSubject;
  }

  get isLoading$() {
    return this.isLoadingSubject;
  }

  getTodos() {
    this.isLoadingSubject.next(true);
    return this.todosService.getTodos().pipe(
      map((res: TodoResponse) => res.todos),
      tap(res => this.todosSubject.next(res)),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  addTodo(todo: Todo) {
    this.isLoadingSubject.next(true);
    return this.todosService.addTodo(todo).pipe(
      tap(res => {
        const todos = this.todosSubject.getValue();
        this.todosSubject.next([...todos, { ...res, id: generateId() }]);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteTodo(todoId: number) {
    this.isLoadingSubject.next(true);
    return this.todosService.deleteTodo(todoId).pipe(
      tap(() => {
        const todos = this.todosSubject.getValue();
        this.todosSubject.next(todos.filter(todo => todo.id !== todoId));
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateTodo(updatedTodo: Todo) {
    this.isLoadingSubject.next(true);
    return this.todosService.updateTodo(updatedTodo).pipe(
      tap(() => {
        const todos = this.todosSubject.getValue();
        this.todosSubject.next(
          todos.map(todo => {
            return todo.id === updatedTodo.id ? updatedTodo : todo;
          })
        );
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
