import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AgLanguagesEnum } from "../../../../enums";

@Injectable()
export class AgTranslateService {
  constructor(private translateService: TranslateService) {
  }

  getTranslation(key: string): string {
    return this.translateService.instant(key);
  }

  use(lang: AgLanguagesEnum): void {
    this.translateService.use(lang);
  }
}
