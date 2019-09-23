import { AgUserInputConfig } from "../../../../models";
import { AgImages } from "../../../../models/interface-class/ag-images.model";
import { DEFAULT_ANIMATION, DEFAULT_IMG_FILTER } from "../../../../consts";
import { AgUserInput } from "../../../../enums";

export interface AgPlaygroundState {
  images: AgImagesListState;
  initialNumberOfImages: number;
  galleryConfig: AgUserInputConfig;
  userInteractionFlag: boolean;
}

export interface AgImagesListState extends AgImages {
  isLoaded?: boolean;
}

export const agPlaygroundInitialState: AgPlaygroundState = {
  images: null,
  initialNumberOfImages: 20,
  userInteractionFlag: false,
  galleryConfig: {
    [AgUserInput.X_INTERVAL]: "15px",
    [AgUserInput.Y_INTERVAL]: "15px",
    [AgUserInput.BOX_SHADOW]: '1px 3px 8px rgba(0, 0, 0, 0.5)',
    [AgUserInput.MIN_IMG_WIDTH]: 'repeat(auto-fit, minmax(200px, 1fr))',
    [AgUserInput.ROW_HEIGHT]: "200px",
    [AgUserInput.ANIMATION]: DEFAULT_ANIMATION,
    [AgUserInput.BORDER_RADIUS]: '0px',
    [AgUserInput.FILTER]: DEFAULT_IMG_FILTER
  }
};
