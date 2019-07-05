import { createAction, props } from "@ngrx/store";

import { AgGallery } from "../../../../../../models";

export const loadGalleries = createAction('[Galleries] Load Galleries');

export const loadGalleriesSuccess = createAction('[Galleries] Load Galleries Success', props<{ galleries: AgGallery[] }>());
