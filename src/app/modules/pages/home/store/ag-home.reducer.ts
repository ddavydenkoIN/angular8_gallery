import { Action, createReducer, on } from "@ngrx/store";

import { agHomeInitialState, AgHomeState } from "./ag-home.state";
import { updateCurrentTab } from "./ag-home.actions";

const reducer = createReducer(
  agHomeInitialState,
  on(updateCurrentTab, (state, {tabName}) => ({
      currentlyOpenedTab: {
          name: tabName || state.currentlyOpenedTab.name
      }
    })
  )
);

export function agHomeReducer(state: AgHomeState | undefined, action: Action) {
  return reducer(state, action);
}
