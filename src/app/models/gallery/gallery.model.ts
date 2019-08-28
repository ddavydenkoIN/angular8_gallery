import { AgNameId } from "../common";
import { AgName } from "../common/name.model";
import { AgImgStyles } from "../img";

export interface AgGallery extends AgNameId<string, number> {
  propContainerHeader?: string;
  propImgHeader?: string;
  styles: AgGalleryStyles;
  thumbnailImgName: string;
  thumbnailImgFolder: string;
  isRandomSizeImages?: boolean;
}

export interface AgImg {
  name: string;
  folder: string;
}

export interface AgGalleryStyles {
  container: AgContainerStyles;
  img: AgImgStyles;
}

export interface AgContainerStyles {
  display: string;
  'grid-template-columns': string;
  'grid-auto-rows': string;
  'grid-row-gap': string;
}

export interface AgUserInputConfig {
  xInterval: string;
  yInterval: string;
  boxShadow: string;
  minImgWidth: string;
  rowHeight: string;
  animationClass?: string;
  animationDuration?: string;
  animationKeyframe?: string;
  borderRadius?: string;
  filter?: string;
}

export interface AgAnimationConfig extends AgName<string> {
  duration: string;
}

export interface AgGalleryThumbnail {
  shape: string;
  url: string;
}

export interface IPropConverter {
  convertProperties: (any) => AgGalleryStyles;
}
