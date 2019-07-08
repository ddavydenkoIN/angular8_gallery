import { Action, createReducer, on } from "@ngrx/store";

import { agGalleriesAdapter, agGalleriesInitialState, AgGalleriesState } from "./ag-galleries.state";
import { loadGalleriesSuccess } from "./ag-galleries.actions";

const reducer = createReducer(
  agGalleriesInitialState,
  on(loadGalleriesSuccess, (state, {galleries}) => ({
      ...agGalleriesAdapter.addAll(galleries, state),
      isLoaded: true
    })
  )
);

export function agGalleriesReducer(state: AgGalleriesState | undefined, action: Action) {
  return reducer(state, action);
}
