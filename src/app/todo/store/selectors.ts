import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from ".";

export const selectTodoState = createFeatureSelector<TodoState>('todo')

export const selectAllTodos = createSelector(selectTodoState, (state: TodoState) =>state.todos);
export const isEmptyTodos = createSelector(
  selectAllTodos,
  (todos) => !todos.length
);

// Observable => Flux de données 1 2 3 4 5 6 7 8 9
