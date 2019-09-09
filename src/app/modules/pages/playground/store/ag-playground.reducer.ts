import { Action, createReducer, on } from "@ngrx/store";
import { agPlaygroundInitialState, AgPlaygroundState } from "./ag-playground.state";
import { loadAllImagesSuccess, updateUserInputModel } from "./ag-playground.actions";

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
    galleryConfig: {
      ...state.galleryConfig,
      ...userInput
    }
  }))
);

export function agPlaygroundReducer(state: AgPlaygroundState | undefined, action: Action) {
  return reducer(state, action);
}
