import { AgNameId, AgNameValue, AgObject } from "../common";

export interface AgGallery extends AgNameId<string, number> {
  propContainerHeader?: string;
  propImgHeader?: string;
  props: AgGalleryProperties;
  thumbnailImgName: string;
  thumbnailImgFolder: string;
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

