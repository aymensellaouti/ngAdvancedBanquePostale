import { Component, Inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/NgRx';
import { Observable } from 'rxjs';
import { isEmptyTodos, selectAllTodos } from '../store/selectors';
import { todoActionGroup } from '../store/actions';
import { UUID_TOKEN } from 'src/app/injection Tokens/injection.token';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  isEmptyTodos$: Observable<boolean>;
  todo = new Todo();
  constructor(private todoService: TodoService, private store: Store<AppState>, @Inject(UUID_TOKEN) private uuid: () => string) {
    this.todo.id = this.uuid();
    this.todos$ = this.store.select(selectAllTodos);
    this.isEmptyTodos$ = this.store.select(isEmptyTodos);
  }
  addTodo() {
    // Je dois dire que j'ai besoin qu'on ajoute un Todo
    this.store.dispatch(todoActionGroup.addTodo({todo: this.todo}));
    this.todo = new Todo();
    this.todo.id = this.uuid();
  }
  deleteTodo(todo: Todo) {
    this.store.dispatch(todoActionGroup.deleteTodo({ id: todo.id }));
  }
}
