import { AgImagesObject } from "../../../../models";

export interface AgPlaygroundState {
  images: AgImagesListState;
  initialNumberOfImages: number;
}

export interface AgImagesListState extends AgImagesObject {
  isLoaded?: boolean;
}

export const agPlaygroundInitialState: AgPlaygroundState = {
  images: null,
  initialNumberOfImages: 15
};
