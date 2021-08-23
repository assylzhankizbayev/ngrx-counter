import { ActionReducerMap } from "@ngrx/store";
import { countNode, countReducer } from "./count/count.reducer";

export interface State {
  [countNode]: number;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer
}

