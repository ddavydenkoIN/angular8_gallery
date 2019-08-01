import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AgHomeState } from "./ag-home.state";

const state = createFeatureSelector('home');

export const retrieveCurrentlyOpenedTab = createSelector(state, (homeState: AgHomeState): string => homeState.currentlyOpenedTab);
