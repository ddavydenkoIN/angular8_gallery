import { AgUserInputConfig, AgImagesObject } from "../../../../models";

export interface AgPlaygroundState {
  images: AgImagesListState;
  initialNumberOfImages: number;
  galleryConfig: AgUserInputConfig;
}

export interface AgImagesListState extends AgImagesObject {
  isLoaded?: boolean;
}

export const agPlaygroundInitialState: AgPlaygroundState = {
  images: null,
  initialNumberOfImages: 15,
  galleryConfig: {
    xInterval: "10px",
    yInterval: "10px",
    boxShadow: 'box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5)',
    minImgWidth: "200px",
    rowHeight: "200px"
  }
};

