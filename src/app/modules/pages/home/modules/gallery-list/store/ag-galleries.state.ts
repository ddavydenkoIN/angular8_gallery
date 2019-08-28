import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

import { AgGallery } from "../../../../../../models";

export const agGalleriesAdapter: EntityAdapter<AgGallery> = createEntityAdapter<AgGallery>({
  selectId: model => model.id
});

export interface AgGalleriesState extends EntityState<AgGallery> {
  isLoaded: boolean;
}

export const agGalleriesInitialState: AgGalleriesState = {
  ...agGalleriesAdapter.getInitialState(),
  isLoaded: false
};
