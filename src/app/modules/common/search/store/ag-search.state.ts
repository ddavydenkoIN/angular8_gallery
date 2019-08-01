import { AgDefaultStoreState, AgObject } from "../../../../models";

export interface AgSearchState extends AgDefaultStoreState {
  searchString?: string;
  previousSearchString?: string;
  translateMap?: AgObject;
}

export const agSearchInitialState: AgSearchState = {
  searchString: '',
  previousSearchString: null,
  isLoaded: false
};
