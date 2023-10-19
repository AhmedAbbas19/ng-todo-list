import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos.models';
import { TodosStoreService } from '../todos.store.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() searchKey: string;
  @Input() inEditMode: boolean;
  @Output() editBtnClicked = new EventEmitter<void>();

  constructor(private todosStore: TodosStoreService) {}

  onCompleteClick() {
    const todo: Todo = { ...this.todo, completed: !this.todo.completed };
    this.todosStore.updateTodo(todo).subscribe();
  }

  onDeleteClick() {
    this.todosStore.deleteTodo(this.todo.id!).subscribe();
  }
}
