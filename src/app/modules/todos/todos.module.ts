import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const HttpLoaderFactoryChild = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/todos/', '.json');
};

export const TRANSLATE_CONFIG_CHILD: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactoryChild,
    deps: [HttpClient]
  },
  isolate: true
};

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
];

@NgModule({
  declarations: [TodosComponent, TodoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule,
    FormsModule,
    TranslateModule.forChild(TRANSLATE_CONFIG_CHILD)
  ]
})
export class TodosModule {}
