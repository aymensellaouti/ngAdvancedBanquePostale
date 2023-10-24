// Ecouter à nos actions et les gérer

import { createReducer } from "@ngrx/store";
import { initalTodoState } from ".";

export const todoReducer = createReducer(initalTodoState);
