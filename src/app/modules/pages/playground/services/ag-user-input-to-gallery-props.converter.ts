import { AgContainerStyles, AgGalleryStyles, AgUserInputConfig, IPropConverter } from "../../../../models/gallery";
import { AgObject } from "../../../../models/common";
import { AgImgStyles } from "../../../../models/img";

const ContainerStylesMap = new Map([
  ['rowHeight', 'grid-auto-rows'],
  ['xInterval', 'grid-column-gap'],
  ['yInterval', 'grid-row-gap'],
  ['minImgWidth', 'grid-template-columns']
]);

const ImgStylesMap = new Map([
  ['animation', 'animation'],
  ['borderRadius', 'borderRadius'],
  ['boxShadow', 'boxShadow'],
  ['filter', 'filter']
]);

export class AgUserInputToGalleryPropsConverter implements IPropConverter {

  public convertProperties(props: AgUserInputConfig): AgGalleryStyles {
    return {
      container: <AgContainerStyles>this.convert(props, ContainerStylesMap),
      img: <AgImgStyles>this.convert(props, ImgStylesMap)
    };
  }

  private convert(inputProps: AgUserInputConfig, propsMap: Map<string, string>): AgObject {
    return Object
      .keys(inputProps)
      .filter((key: string) => propsMap.has(key))
      .reduce((acc: AgObject, curr: string) => ({
        ...acc,
        [propsMap.get(curr)]: inputProps[curr]
      }), {});
  }
}
