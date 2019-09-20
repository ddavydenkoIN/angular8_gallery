import { AgAnimationEnum } from "../enums";
import { AgImgFilter } from "../models/img";

export const IMG_FOLDER = "assets/img/";

export const GALLERY_LIST_THUMBNAILS_IMG_FOLDER = IMG_FOLDER + "gallery/thumbnails/";
export const LANGUAGE_ICONS_FOLDER = IMG_FOLDER + "flags/";

export const AG_GALLERY_IMG_DEFAULT_WIDTH = 200;
export const DEFAULT_ANIMATION = {
  animation: AgAnimationEnum.FADE_IN_BOTTOM_TOP,
  duration: '1s'
};

export const DEFAULT_IMG_FILTER = 'grayscale(1)';

export const IMG_FILTERS: AgImgFilter[] = [
  {label: 'PLAYGROUND.BLACK_AND_WHITE', value: 'grayscale(1)'},
  {label: 'PLAYGROUND.BLUR', value: 'blur(3px)'},
  {label: 'PLAYGROUND.CONTRAST', value: 'contrast(1.4)'},
  {label: 'PLAYGROUND.BRIGHT', value: 'brightness(1.5)'},
  {label: 'PLAYGROUND.DARK', value: 'brightness(0.5)'},
  {label: 'PLAYGROUND.INVERT', value: 'invert(1)'},
  {label: 'PLAYGROUND.TRANSPARENT', value: 'opacity(0.5)'},
  {label: 'PLAYGROUND.SEPIA', value: 'sepia(1)'}
];
