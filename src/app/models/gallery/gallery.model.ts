import { AgNameId, AgNameValue, AgObject } from "../common";
import { AgImageShape } from "../../enums/image-shape.enum";

export interface AgGallery extends AgNameId<string, number> {
  propContainerHeader?: string;
  propImgHeader?: string;
  props: AgGalleryProperties;
  thumbnailImgName: string;
  thumbnailImgFolder: string;
  isRandomSizeImages?: boolean;
}

export interface AgImg {
  name: string;
  folder: string;
}

export interface AgGalleryProperties {
  parent: AgNameValue[];
  child: AgNameValue[];
}

export interface AgGalleryStyles {
  container: AgObject;
  img: AgObject;
}

export interface AgGalleryThumbnail {
  shape: string;
  url: string;
}

export interface AgImagesObject {
  source: string;
  urlSuffixes: string[];
}
