import { AgPropertyMap } from "../../providers/decorators";

export class AgImages {
  @AgPropertyMap('sourceFolder')
  source: string = null;
  urlSuffixes: string[] = null;
  extension: string = null;
}
