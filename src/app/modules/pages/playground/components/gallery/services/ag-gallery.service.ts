import { AgImageShape } from "../../../../../../enums";
import { AgNameValue, AgObject } from "../../../../../../models";

export class AgGalleryService {

  calculateBoundaryIndex(length: number, numberOfImagesOnStart: number): number {
    return numberOfImagesOnStart && length > numberOfImagesOnStart
      ? numberOfImagesOnStart
      : length;
  }

  getRandomShapes(length: number): string[] {
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

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
