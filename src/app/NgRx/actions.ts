import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo/model/todo";

export const intitAppAction = createAction('[App] Init App')
// export const addTodoAction = createAction('[Todo] Add Todo', props<Todo>())
// export const deleteTodoAction = createAction('[App] Init App')
