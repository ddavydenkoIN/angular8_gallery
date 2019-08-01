import { AgSearchableTabs } from "../../../../enums";

export interface AgHomeState {
  currentlyOpenedTab: string | AgSearchableTabs;
}

export const agHomeInitialState: AgHomeState = {
  currentlyOpenedTab: AgSearchableTabs.ABOUT
};
