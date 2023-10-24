import { TodoState, initalTodoState } from "../todo/store";

export interface AppState {
  appName: string;
  todo: TodoState;
}

export const appInitialState: AppState = {
  appName: '',
  todo: initalTodoState,
};
