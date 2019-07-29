import { AgDefaultStoreState } from "../../../../models";

export interface AgSearchState extends AgDefaultStoreState {
}

export const agSearchInitialState: AgSearchState = {
  isLoaded: false
};
