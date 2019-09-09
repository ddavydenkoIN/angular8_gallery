import { AgUserInputConfig } from "../../../../models";
import { AgImages } from "../../../../models/interface-class/ag-images.model";
import { AG_GALLERY_IMG_DEFAULT_WIDTH, DEFAULT_ANIMATION } from "../../../../consts";
import { AgUserInput } from "../../../../enums";

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
    [AgUserInput.X_INTERVAL]: "15px",
    [AgUserInput.Y_INTERVAL]: "15px",
    [AgUserInput.BOX_SHADOW]: '1px 3px 8px rgba(0, 0, 0, 0.5)',
    [AgUserInput.MIN_IMG_WIDTH]: 'repeat(auto-fit, minmax(200px, 1fr))',
    [AgUserInput.ROW_HEIGHT]: "200px",
    [AgUserInput.ANIMATION_DURATION]: '1s',
    [AgUserInput.ANIMATION_KEYFRAME]: DEFAULT_ANIMATION
  }
};

