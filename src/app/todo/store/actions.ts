import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../model/todo";

// Définir les actions du TodoState
export const todoActionGroup = createActionGroup({
  source: 'Todo',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    'Delete Todo': props<{ id: string }>(),
    'Get Todos': emptyProps(),
    'Loaded Todos': props<{ todos: Todo[] }>(),
  },
});
