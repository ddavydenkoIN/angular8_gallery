import { createAction, props } from "@ngrx/store";

import { AgImages } from "../../../../models/interface-class/ag-images.model";
import { AgUserInputConfig } from "../../../../models/gallery";

export const loadAllImages = createAction('[Playground] Load all images');

export const loadAllImagesSuccess = createAction('[Playground] Load all images success', props<{ images: AgImages }>());
export const updateUserInputModel = createAction('[Playground] Update user input model', props<AgUserInputConfig>());
