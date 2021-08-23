import { createReducer, on } from "@ngrx/store";
import { clear, decrease, increase } from "./count.actions";

export const countNode = 'count';

export const initialState = 0;

const _countReducer = createReducer(
  initialState,
  on(increase, state => state + 1),
  on(decrease, state => state - 1),
  on(clear, state => 0)
);

// export const countReducer = (state, action) => _countReducer(state, action);
export function countReducer(state, action) {
  return _countReducer(state, action);
}
