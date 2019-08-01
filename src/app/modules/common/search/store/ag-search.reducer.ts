import { Action, createReducer, on } from "@ngrx/store";

import { agSearchInitialState, AgSearchState } from "./ag-search.state";
import { initSearchSuccess, updateSearchValue } from "./ag-search.actions";

const reducer = createReducer(
  agSearchInitialState,
  on(initSearchSuccess, (state, {payload}) => ({
      translateMap: payload,
      isLoaded: true
    })
  ),
  on(updateSearchValue, (state, {payload}) => ({
      ...state,
      previousSearchString: state.searchString,
      searchString: payload
    })
  )
);

export function agSearchReducer(state: AgSearchState | undefined, action: Action) {
  return reducer(state, action);
}
