import { createAction, props } from "@ngrx/store";

export const updateCurrentTab = createAction('[Home] Update Current Tab', props<{tabName: string}>());
