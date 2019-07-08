import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { storeFreeze } from 'ngrx-store-freeze';

import { AgState } from "./state";
import { environment } from "../../environments/environment";

export const metaReducers: MetaReducer<AgState>[] = !environment.production ? [storeFreeze] : [];

export const agReducers: ActionReducerMap<AgState> = {
  router: routerReducer
};
