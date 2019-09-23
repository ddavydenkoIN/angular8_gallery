import { AgNameId } from "../common";
import { AgImgStyles } from "../img";
import { AgAnimation } from "./animation.model";

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
  container: Partial<AgContainerStyles>;
  img: Partial<AgImgStyles>;
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
  animation?: AgAnimation;
  borderRadius?: string;
  filter?: string;
}

export interface IPropConverter {
  convertProperties: (any) => AgGalleryStyles;
}
