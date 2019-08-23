import { createAction, props } from "@ngrx/store";

import { AgImages } from "../../../../models/interface-class/ag-images.model";

export const loadAllImages = createAction('[Playground] Load all images');

export const loadAllImagesSuccess = createAction('[Playground] Load all images success', props<{ images: AgImages }>());
