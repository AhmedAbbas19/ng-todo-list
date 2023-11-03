import { Component, OnInit } from '@angular/core';
import { TodosStoreService } from './todos.store.service';
import { Todo } from './todos.models';
import { scrollTop } from 'src/app/core/utils/utils';
import { SAFE_TEXT_REGEX } from 'src/app/core/constants/regex.constants';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  inSearchMode = false;
  inAddMode = false;
  inEditMode = false;

  updatingTodo: Todo | null;
  searchKey = '';

  safeTextRegex = SAFE_TEXT_REGEX;

  constructor(
    public todosStore: TodosStoreService,
    private translateStore: TranslationService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateStore.lang$.subscribe(lang => this.translate.use(lang));
    this.todosStore.getTodos().subscribe();
  }

  onAddTodo(value: string) {
    if (value) {
      const newTodo: Todo = { todo: value, completed: false };
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
    this.updatingTodo = { ...todo };
    this.inAddMode = false;
    this.inSearchMode = false;
    this.searchKey = '';
    scrollTop();
  }

  onSearchBtnClick() {
    this.inSearchMode = true;
    this.inAddMode = false;
    this.updatingTodo = null;
    scrollTop();
  }

  onAddBtnClick() {
    this.inAddMode = true;
    this.inSearchMode = false;
    this.updatingTodo = null;
    this.searchKey = '';
    scrollTop();
  }

  onEditBtnClick() {
    this.inEditMode = !this.inEditMode;
    this.updatingTodo = null;
    scrollTop();
  }
}
