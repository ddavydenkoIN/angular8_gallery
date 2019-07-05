import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

import { AgGallery } from "../../../../../../models/index";

export const agGalleriesAdapter: EntityAdapter<AgGallery> = createEntityAdapter<AgGallery>({
  selectId: model => model.id
});

export interface AgGalleriesState extends EntityState<AgGallery> {
}

export const agGalleriesInitialState: AgGalleriesState = agGalleriesAdapter.getInitialState();
