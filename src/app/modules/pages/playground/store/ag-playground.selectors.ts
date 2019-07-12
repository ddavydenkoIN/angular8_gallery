import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AgPlaygroundState } from "./ag-playground.state";

const agPlayground = createFeatureSelector('playground');

export const retrieveAllImageUrls = createSelector(agPlayground, (state: AgPlaygroundState) => {
  return state.images.urlSuffixes.map(suffix => state.images.source + suffix);
});

export const retrieveInitialNumberOfImages = createSelector(agPlayground, (state: AgPlaygroundState) => state.initialNumberOfImages);
