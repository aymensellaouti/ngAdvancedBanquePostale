// Ecouter à nos actions et les gérer
import { createReducer, on } from '@ngrx/store';
import { initalTodoState } from '.';
import { todoActionGroup } from './actions';
export const todoReducer = createReducer(
  initalTodoState,
  on(todoActionGroup.addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo ],
  })),
  on(todoActionGroup.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id != id)
  })),
  on(todoActionGroup.loadedTodos, (state, { todos }) => ({
    ...state,
    todos
  })),
);
