import { AgNameValue } from "../common";
import { AgGalleryProperties, AgImg } from "./gallery.model";

export interface AgGalleryThumbnail {
  id: number;
  header: string;
  propHeader: string;
  props: AgGalleryProperties;
  thumbnailImg: AgImg;
  propsList?: AgNameValue[];
}

