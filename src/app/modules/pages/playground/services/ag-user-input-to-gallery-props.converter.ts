import { AgGalleryProperties, AgUserInputConfig, IPropConverter } from "../../../../models/gallery";
import { AgNameValue } from "../../../../models/common";

const ContainerPropsMap = new Map([
  ['rowHeight', 'grid-auto-rows'],
  ['xInterval', 'grid-column-gap'],
  ['yInterval', 'grid-row-gap']
]);

const ImgPropsMap = new Map([
  ['boxShadow', 'box-shadow']
]);

export class AgUserInputToGalleryPropsConverter implements IPropConverter {

  public convertProperties(props: AgUserInputConfig): AgGalleryProperties {
    return {
      parent: this.convert(props, ContainerPropsMap),
      child: this.convert(props, ImgPropsMap)
    };
  }

  private convert(inputProps: AgUserInputConfig, propsMap: Map<string, string>): AgNameValue[] {
    return Object
      .entries(inputProps)
      .filter(([key, value]: [string, string]) => propsMap.has(key))
      .map(([key, value]: [string, string]) => {
        return {
          name: propsMap.get(key),
          value: value
        };
      });
  }
}
