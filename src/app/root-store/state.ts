import { RouterReducerState } from "@ngrx/router-store";

import { AgGalleriesState } from "../modules/pages/home/modules/gallery-list/store/ag-galleries.state";

export interface AgState {
  router: RouterReducerState;
  galleries?: AgGalleriesState;
}
