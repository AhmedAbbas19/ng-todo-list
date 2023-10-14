import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
      path: '',
      component: TodosComponent
    }
  ];

@NgModule({
    declarations: [TodosComponent, TodoItemComponent],
    imports: [ CommonModule, RouterModule.forChild(routes), SharedModule, CoreModule, FormsModule, TranslateModule ]
})
export class TodosModule {}