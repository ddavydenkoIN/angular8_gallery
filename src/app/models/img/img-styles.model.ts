import { AgAnimation } from "../gallery";

export interface AgImgStyles {
  boxShadow: string;
  borderRadius: string;
  animation: AgAnimation;
  filter?: string;
}


export class AgImgWidthObject {
  value: string;
  prefix?: string;
  suffix?: string;
}
