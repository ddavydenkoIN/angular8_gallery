import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Dictionary } from "@ngrx/entity";

import { agGalleriesAdapter } from "./ag-galleries.state";
import { AgGallery, AgGalleryThumbnail } from "../../../../../../models";

export const getGalleriesState = createFeatureSelector<AgGallery>('galleries');

export const {
  selectIds: selectGalleriesIds,
  selectEntities: selectGalleriesEntities,
  selectAll: selectAllGalleries,
  selectTotal: selectGalleriesTotal,
} = agGalleriesAdapter.getSelectors(getGalleriesState);

export const selectGalleriesPreviewData = createSelector(
  selectAllGalleries,
  (galleries: AgGallery[]): AgGalleryThumbnail[] => galleries.map(gallery => ({
    id: gallery.id,
    header: gallery.name,
    propHeader: gallery.propHeader,
    props: gallery.props,
    thumbnailImg: {
      name: gallery.thumbnailImgName,
      folder: gallery.thumbnailImgFolder
    }
  }))
);

export const isNoGalleryLoaded = createSelector(
  selectGalleriesIds,
  (ids: number[]): boolean => !ids || !ids.length
);

export const selectGalleryById = createSelector(
  selectGalleriesEntities,
  (entities: Dictionary<AgGallery>, id: string) => entities[id]
);
