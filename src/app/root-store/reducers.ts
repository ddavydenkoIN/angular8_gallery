import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { storeFreeze } from 'ngrx-store-freeze';

import { AgState } from "./state";
import { environment } from "../../environments/environment";
import { agGalleriesReducer } from "../modules/pages/home/modules/gallery-list/store/ag-galleries.reducer";

export const metaReducers: MetaReducer<AgState>[] = !environment.production ? [storeFreeze] : [];

export const agReducers: ActionReducerMap<AgState> = {
  router: routerReducer
};
