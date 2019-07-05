import { AgNameValue } from "../common";
import { AgImg } from "./gallery";

export interface AgGalleryThumbnail {
  id: number;
  header: string;
  propHeader: string;
  propsList: AgNameValue[];
  thumbnailImg: AgImg;
}
