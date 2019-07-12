import { Action, createReducer, on } from "@ngrx/store";
import { agPlaygroundInitialState, AgPlaygroundState } from "./ag-playground.state";
import { loadAllImagesSuccess } from "./ag-playground.actions";

const reducer = createReducer(
  agPlaygroundInitialState,
  on(loadAllImagesSuccess, (state, {images}) => ({
      ...state,
      images: {
        ...images,
        isLoaded: true
      }
    })
  )
);

export function agPlaygroundReducer(state: AgPlaygroundState | undefined, action: Action) {
  return reducer(state, action);
}
