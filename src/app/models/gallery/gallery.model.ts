import { AgNameId, AgNameValue } from "../common";

export interface AgGallery extends AgNameId<string, number> {
  propHeader?: string;
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