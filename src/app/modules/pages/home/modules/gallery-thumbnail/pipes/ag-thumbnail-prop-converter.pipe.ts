import { Pipe, PipeTransform } from "@angular/core";
import AgLogger from "../../../../../../providers/decorators/utils/logger.decorator";

@Pipe({name: 'thumbnailPropConverter'})
export class AgThumbnailPropConverterPipe implements PipeTransform {
  transform(propObject: any): string[] {
    return this.buildObjectPropArray(propObject);
  }

  private buildObjectPropArray(propObject: any): string[] {
    return Object
      .entries(propObject)
      .reduce((acc, [currKey, currValue]) => {
        if (typeof currValue === 'object') {
          this.buildObjectPropArray(currValue).forEach(value => acc.push(value));
        } else {
          acc.push(currKey + ": " + currValue);
        }
        return acc;
      }, []);
  }
}

