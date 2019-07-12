import { createAction, props } from "@ngrx/store";

import { AgImagesObject } from "../../../../models";

export const loadAllImages = createAction('[Playground] Load all images');

export const loadAllImagesSuccess = createAction('[Playground] Load all images success', props<{ images: AgImagesObject }>());
