import { Component } from '@angular/core';

import { AgLanguagesEnum } from "../../../../enums";
import { LANGUAGE_ICONS_FOLDER } from "../../../../consts"
import { AgTranslateService } from "../../translate/services/ag-translate.service";

@Component({
  selector: 'ag-header',
  templateUrl: './ag-header.component.html',
  styleUrls: ['./ag-header.component.less']
})
export class AgHeaderComponent {
  languages: AgLanguagesEnum[] = [AgLanguagesEnum.ENG, AgLanguagesEnum.RUS, AgLanguagesEnum.UKR, AgLanguagesEnum.ESP];

  languageIconsUrl = LANGUAGE_ICONS_FOLDER;

  constructor(private translateService: AgTranslateService) {}

  setWebsitesLanguage(lang: AgLanguagesEnum) {
    this.translateService.use(lang);
  }
}
