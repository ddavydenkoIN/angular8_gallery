import { AgGalleryStyles, AgUserInputConfig } from "../../../../models/gallery";
import { AgUserInput } from "../../../../enums";
import { AgImgWidthObject } from "../../../../models/img";

export class AgPlaygroundFormService {

  handleUserInput(userInput: AgUserInputConfig, imageWidthObj: AgImgWidthObject) {
    return {
      ...userInput,
      [AgUserInput.X_INTERVAL]: this.addPrefix(userInput.xInterval, 'px'),
      [AgUserInput.Y_INTERVAL]: this.addPrefix(userInput.yInterval, 'px'),
      [AgUserInput.MIN_IMG_WIDTH]: this.buildImgWidthString(userInput.minImgWidth, imageWidthObj),
      [AgUserInput.ROW_HEIGHT]: this.addPrefix(userInput.rowHeight, 'px'),
      [AgUserInput.ANIMATION]: {
        ...userInput.animation,
        duration: this.addPrefix(userInput.animation.duration, 's'),
      },
      [AgUserInput.BORDER_RADIUS]: this.addPrefix(userInput.borderRadius, 'px')
    };
  }

  parseImgWidth(str: string): AgImgWidthObject {
    const prefixSuffixArray = str.split('200');
    return {
      value: '200',
      prefix: prefixSuffixArray[0],
      suffix: prefixSuffixArray[1]
    };
  }

  buildImgWidthString(value: string, imageWidthObj: AgImgWidthObject) {
    return imageWidthObj.prefix.concat(value).concat(imageWidthObj.suffix);
  }

  private addPrefix(value: any, prefix: string) {
    return (value || 0) + prefix;
  }
}
