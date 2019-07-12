import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Dictionary } from "@ngrx/entity";

import { agGalleriesAdapter, AgGalleriesState } from "./ag-galleries.state";
import { AgGallery, AgGalleryListThumbnail, AgGalleryProperties } from "../../../../../../models";

export const getGalleriesState = createFeatureSelector<AgGalleriesState>('galleries');

export const {
  selectIds: selectGalleriesIds,
  selectEntities: selectGalleriesEntities,
  selectAll: selectAllGalleries,
  selectTotal: selectGalleriesTotal,
} = agGalleriesAdapter.getSelectors(getGalleriesState);

export const selectGalleriesPreviewData = createSelector(
  selectAllGalleries,
  (galleries: AgGallery[]): AgGalleryListThumbnail[] => galleries.map(gallery => ({
    id: gallery.id,
    header: gallery.name,
    propImgHeader: gallery.propImgHeader,
    propContainerHeader: gallery.propContainerHeader,
    props: gallery.props,
    thumbnailImg: {
      name: gallery.thumbnailImgName,
      folder: gallery.thumbnailImgFolder
    }
  }))
);

export const isNoGalleryLoaded = createSelector(
  getGalleriesState,
  (state: AgGalleriesState): boolean => {
    return !state || !state.isLoaded;
  }
);

export const selectGalleryProps = createSelector(
  selectGalleriesEntities,
  (entities: Dictionary<AgGallery>, id: string): AgGalleryProperties => entities[id] && entities[id]['props'] || null
);
