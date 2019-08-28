import { AgUserInputConfig } from "../../../../models";
import { AgImages } from "../../../../models/interface-class/ag-images.model";
import { AG_GALLERY_IMG_DEFAULT_WIDTH, DEFAULT_ANIMATION } from "../../../../consts";

export interface AgPlaygroundState {
  images: AgImagesListState;
  initialNumberOfImages: number;
  galleryConfig: AgUserInputConfig;
}

export interface AgImagesListState extends AgImages {
  isLoaded?: boolean;
}

export const agPlaygroundInitialState: AgPlaygroundState = {
  images: null,
  initialNumberOfImages: 15,
  galleryConfig: {
    xInterval: "15px",
    yInterval: "15px",
    boxShadow: '1px 3px 8px rgba(0, 0, 0, 0.5)',
    minImgWidth: AG_GALLERY_IMG_DEFAULT_WIDTH + 'px',
    rowHeight: "200px",
    animationDuration: '1s',
    animationKeyframe: DEFAULT_ANIMATION
  }
};

