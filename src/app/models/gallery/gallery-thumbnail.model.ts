import { AgNameValue } from "../common";
import { AgGalleryStyles, AgImg } from "./gallery.model";

export interface AgGalleryListThumbnail {
  id: number;
  header: string;
  propImgHeader: string;
  propContainerHeader: string;
  styles: AgGalleryStyles;
  thumbnailImg: AgImg;
  propsList?: AgNameValue[];
}

