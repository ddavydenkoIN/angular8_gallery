import { AgImageShape } from "../../../../../../enums";

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

  scrollToTop() {
    const el = document.getElementsByClassName('ag-gallery__wrapper');
    if (el && el.length) {
      el[0].scrollTop = 0;
    }
  }

  getRandomShape(): string {
    const shapes = Object.values(AgImageShape);
    return shapes[this.getRandomInt(0, Object.values(shapes).length)];
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
