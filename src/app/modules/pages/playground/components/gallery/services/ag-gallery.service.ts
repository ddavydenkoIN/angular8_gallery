import { AgImageShape } from "../../../../../../enums";
import { AgGalleryProperties, AgGalleryStyles, AgNameValue, AgObject } from "../../../../../../models";

export class AgGalleryService {

  convertStyles(props: AgGalleryProperties): AgGalleryStyles {
    return props
      ? {
        container: this.convertNameValueArrToObj(props.parent),
        img: this.convertNameValueArrToObj(props.child)
      }
      : null;
  }

  calculateBoundaryIndex(length: number, numberOfImagesOnStart: number) {
    return numberOfImagesOnStart && length > numberOfImagesOnStart
      ? numberOfImagesOnStart
      : length;
  }

  getRandomShapes(length: number) {
    const shapesArray: string[] = [];
    for (let i = 0; i <= length; i++) {
      shapesArray.push(this.getRandomShape());
    }
    return shapesArray;
  }

  getRandomShape(): string {
    const shapes = Object.values(AgImageShape);
    return shapes[this.getRandomInt(0, Object.values(shapes).length)];
  }

  private convertNameValueArrToObj(nameValueArr: AgNameValue[]): AgObject {
    return nameValueArr && nameValueArr.length
      ? nameValueArr.reduce((acc: AgObject, curr: AgNameValue) => {
        acc[curr.name] = curr.value;
        return acc;
      }, {})
      : null;
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
