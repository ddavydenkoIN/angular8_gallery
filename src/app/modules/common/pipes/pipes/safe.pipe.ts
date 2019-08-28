import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { AgBypassSecurityType } from "../../../../enums";

@Pipe({name: 'safe'})
export class AgSafePipe {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string,  type: AgBypassSecurityType) {
    switch (type) {
      case AgBypassSecurityType.HTML:
        return this.sanitizer.bypassSecurityTrustHtml(value);
        break;
      case AgBypassSecurityType.RESOURCE_URL:
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        break;
      case AgBypassSecurityType.SCRIPT:
        return this.sanitizer.bypassSecurityTrustScript(value);
        break;
      case AgBypassSecurityType.STYLE:
        return this.sanitizer.bypassSecurityTrustStyle(value);
        break;
      case AgBypassSecurityType.URL:
        return this.sanitizer.bypassSecurityTrustUrl(value);
    }
  }
}
