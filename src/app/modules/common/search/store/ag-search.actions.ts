import { createAction, props } from "@ngrx/store";

export const initSearch = createAction('[Search] Init Search', props<{payload: string}>());

export const initSearchSuccess = createAction('[Search] Init Search Success', props<{payload: any}>());

export const updateSearchValue = createAction('[Search] Update Search value', props<{payload: string}>());
export const updateSearchValueSuccess = createAction('[Search] Update Search Value Success', props<{payload: string}>());
// export const updateSearchTab = createAction('[Search] Update Search Tab', props<{payload: any[]}>());
