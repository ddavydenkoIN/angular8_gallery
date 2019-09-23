import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AgPlaygroundState } from "./ag-playground.state";
import { AgUserInputConfig } from "../../../../models/gallery";

const agPlayground = createFeatureSelector('playground');

export const retrieveAllImageUrls = createSelector(agPlayground, (state: AgPlaygroundState) => {
  const extension = state.images.extension ? '.' + state.images.extension : '';
  return state.images.urlSuffixes.map(suffix => state.images.source + suffix + extension);
});

export const retrieveInitialNumberOfImages = createSelector(agPlayground,
  (state: AgPlaygroundState) => state.initialNumberOfImages);

export const retrieveInitialGalleryConfig = createSelector(agPlayground,
  (state: AgPlaygroundState) => state.galleryConfig);

export const retrieveUserInteractionFlag = createSelector(agPlayground,
  (state: AgPlaygroundState) => state.userInteractionFlag);

export const retrieveImgWidth = createSelector(retrieveInitialGalleryConfig,
  (state: AgUserInputConfig) => state.minImgWidth);
