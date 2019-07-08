import { AgNameValue } from "../common";
import { AgGalleryProperties, AgImg } from "./gallery.model";

export interface AgGalleryThumbnail {
  id: number;
  header: string;
  propImgHeader: string;
  propContainerHeader: string;
  props: AgGalleryProperties;
  thumbnailImg: AgImg;
  propsList?: AgNameValue[];
}

