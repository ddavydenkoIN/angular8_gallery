import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AgSearchState } from "./ag-search.state";
import { AgSearchableTabs } from "../../../../enums";

const state = createFeatureSelector('search');

export const retrieveSearchValue = createSelector(state, (searchState: AgSearchState) => searchState && searchState.searchString);
export const retrieveSearchMap = createSelector(state, (searchState: AgSearchState) => Object
  .keys(AgSearchableTabs)
  .reduce((acc, curr) => {
      if (searchState && searchState.translateMap) {
        acc[curr] = searchState.translateMap[curr];
      }
      return acc;
    }, {}
  )
);

export const retrievePreviousSearchString = createSelector(state, (searchState: AgSearchState) => searchState && searchState.previousSearchString);
export const retrieveSearchValuPair = createSelector(
  state,
  retrievePreviousSearchString,
  retrieveSearchValue,
  (searchState: AgSearchState, previousString: string, currentString: string) => [previousString, currentString]);
