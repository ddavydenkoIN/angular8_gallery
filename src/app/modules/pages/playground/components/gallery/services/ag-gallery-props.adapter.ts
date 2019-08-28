import { AgGalleryStyles, IPropConverter } from "../../../../../../models/gallery";

export class AgGalleryPropsAdapter {
  constructor(public converter: IPropConverter) {}

  public convert(externalConfig: any): AgGalleryStyles {
    return this.converter.convertProperties(externalConfig);
  }
}
