// Ecouter à nos actions et les gérer
import { createReducer, on } from '@ngrx/store';
import { initalTodoState } from '.';
import { todoActionGroup } from './actions';
import { v4 as uuidv4 } from 'uuid';
export const todoReducer = createReducer(
  initalTodoState,
  on(todoActionGroup.addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, { ...todo, id: uuidv4() }],
  }))
);
