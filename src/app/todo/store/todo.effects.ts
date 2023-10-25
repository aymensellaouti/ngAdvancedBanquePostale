import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todoActionGroup } from "./actions";
import { map, of, switchMap } from "rxjs";
import { Todo } from "../model/todo";

@Injectable({ providedIn: 'root' })
export class TodoEffect {
  loadedTodos = createEffect(() => this.actions$.pipe(
    ofType(todoActionGroup.getTodos),
    switchMap(
      action => of([
          new Todo("1", "first", "doing something"),
          new Todo("2", "second", "doing another thing"),
        ])
    ),
    map( todos => todoActionGroup.loadedTodos({todos: todos}))
  ))
  constructor(private actions$: Actions) {}
}
