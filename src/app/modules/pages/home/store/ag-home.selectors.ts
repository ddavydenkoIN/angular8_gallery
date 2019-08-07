import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AgHomeState } from "./ag-home.state";
import { AgName } from "../../../../models/common/name.model";

const state = createFeatureSelector('home');

export const retrieveCurrentlyOpenedTab = createSelector(state, (homeState: AgHomeState): AgName<string> => homeState.currentlyOpenedTab);
