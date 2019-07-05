import { Component } from '@angular/core';

import { AgLanguages } from "../../../../consts";
import { AgTranslateService } from "../../translate/services/ag-translate.service";
import { LANGUAGE_ICONS_FOLDER } from "../../../../consts/img";

@Component({
  selector: 'ag-header',
  templateUrl: './ag-header.component.html',
  styleUrls: ['./ag-header.component.less']
})
export class AgHeaderComponent {
  languages: AgLanguages[] = [AgLanguages.ENG, AgLanguages.RUS, AgLanguages.UKR, AgLanguages.ESP];

  languageIconsUrl = LANGUAGE_ICONS_FOLDER;

  constructor(private translateService: AgTranslateService) {}

  setWebsitesLanguage(lang: AgLanguages) {
    this.translateService.use(lang);
  }
}
