import { Injectable } from "@angular/core";
import { AgGalleryProperties, AgGalleryStyles } from "../../../../models/gallery";
import { AgNameValue, AgObject } from "../../../../models/common";

@Injectable()
export class AgPlaygroundService {

  convertStyles(props: AgGalleryProperties): AgGalleryStyles {
    return props
      ? {
        container: this.convertNameValueArrToObj(props.parent),
        img: this.convertNameValueArrToObj(props.child)
      }
      : null;
  }
  private convertNameValueArrToObj(nameValueArr: AgNameValue[]): AgObject {
    return nameValueArr && nameValueArr.length
      ? nameValueArr.reduce((acc: AgObject, curr: AgNameValue) => {
        acc[curr.name] = curr.value;
        return acc;
      }, {})
      : null;
  }
}