import { Action, createReducer, on } from "@ngrx/store";
import { agPlaygroundInitialState, AgPlaygroundState } from "./ag-playground.state";
import { loadAllImagesSuccess, resetPlaygroundState, updateUserInputModel } from "./ag-playground.actions";

const reducer = createReducer(
  agPlaygroundInitialState,
  on(loadAllImagesSuccess, (state, {images}) => ({
      ...state,
      images: {
        ...images,
        isLoaded: true
      }
    })
  ),
  on(updateUserInputModel, (state, userInput) => ({
    ...state,
    userInteractionFlag: true,
    galleryConfig: {
      ...state.galleryConfig,
      ...userInput
    }
  })),
  on(resetPlaygroundState, (state) => ({
    ...agPlaygroundInitialState
  }))
);

export function agPlaygroundReducer(state: AgPlaygroundState | undefined, action: Action) {
  return reducer(state, action);
}
