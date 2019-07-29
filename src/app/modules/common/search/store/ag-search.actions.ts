import { createAction, props } from "@ngrx/store";

export const initSearch = createAction('[Search] Init Search', props<{payload: string}>());

export const initSearchSuccess = createAction('[Search] Init Search Success', props<{payload: any}>());
