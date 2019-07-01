import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    translateService.addLangs(["en", "ru"]);
    translateService.setDefaultLang('en');

    const browserLang = translateService.getBrowserLang();
    // translateService.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
    translateService.use('en');
  }
}
