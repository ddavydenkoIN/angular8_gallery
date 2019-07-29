import { Action, createReducer, on } from "@ngrx/store";

import { agSearchInitialState, AgSearchState } from "./ag-search.state";
import { initSearchSuccess } from "./ag-search.actions";

const reducer = createReducer(
  agSearchInitialState,
  on(initSearchSuccess, (state, {payload}) => ({
      translateMap: payload,
      isLoaded: true
    })
  )
);

export function agSearchReducer(state: AgSearchState | undefined, action: Action) {
  return reducer(state, action);
}
