import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class AgTranslateService {
  constructor(private translateService: TranslateService) {
  }

  getTranslation(key: string) {
    return this.translateService.instant(key);
  }
}
