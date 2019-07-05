import { Action, createReducer, on } from "@ngrx/store";

import { agGalleriesAdapter, agGalleriesInitialState, AgGalleriesState } from "./ag-galleries.state";
import { loadGalleriesSuccess } from "./ag-galleries.actions";

const reducer = createReducer(
  agGalleriesInitialState,
  on(loadGalleriesSuccess, (state, {galleries}) => {
    console.log(galleries);
    return agGalleriesAdapter.addAll(galleries, state);
  })
);

export function agGalleriesReducer(state: AgGalleriesState | undefined, action: Action) {
  return reducer(state, action);
}
