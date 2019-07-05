import { AgNameId, AgNameValue } from "../common";

export interface AgGallery extends AgNameId<string, number> {
  propHeader?: string;
  propsList: AgNameValue[];
  thumbnailImgName: string;
  thumbnailImgFolder: string;
}

export interface AgImg {
  name: string;
  folder: string;
}
