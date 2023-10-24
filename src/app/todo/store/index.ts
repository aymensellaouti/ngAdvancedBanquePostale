import { Todo } from "../model/todo";

// On définit le feature state
export interface TodoState {
  todos: Todo[]
}

export const initalTodoState = {
  todos: []
}
