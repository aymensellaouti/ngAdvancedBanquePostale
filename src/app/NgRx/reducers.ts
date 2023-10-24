import { createReducer, on } from "@ngrx/store";
import { intitAppAction } from "./actions";
import { appInitialState } from ".";

export const initStateReducer = createReducer(
  appInitialState,
  on(intitAppAction, (state, ) => ({ ...state, appName: 'Banque Postale' }))
);
