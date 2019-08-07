import { AgSearchableTabs } from "../../../../enums";
import { AgName } from "../../../../models/common/name.model";

export interface AgHomeState {
  currentlyOpenedTab: AgName<string | AgSearchableTabs>;
}

export const agHomeInitialState: AgHomeState = {
  currentlyOpenedTab: {
    name: AgSearchableTabs.ABOUT
  }
};
