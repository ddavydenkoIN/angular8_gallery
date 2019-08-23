import { AgGalleryProperties, IPropConverter } from "../../../../../../models/gallery";

export class AgGalleryPropsAdapter {
  constructor(public converter: IPropConverter) {}

  public convert(externalConfig: any): AgGalleryProperties {
    return this.converter.convertProperties(externalConfig);
  }
}
