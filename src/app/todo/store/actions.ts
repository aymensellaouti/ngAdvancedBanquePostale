import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../model/todo";

// Définir les actions du TodoState
export const todoActionGroup = createActionGroup({
  source: "Todo",
  events: {
    "Add Todo": props<{todo: Todo}>()
  }
})
