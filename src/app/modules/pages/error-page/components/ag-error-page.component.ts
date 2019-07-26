import { Component } from '@angular/core';

@Component({
  selector: 'ag-error-page',
  template: `
      <img src="../../../../../assets/img/not-found/not-found-panda.webp" class="notFoundPic">
      <span class="errorMessage">{{"NOT_FOUND.MESSAGE" | translate}}</span>
  `,
  styleUrls: ['./ag-error-page.component.less']
})
export class AgErrorPageComponent {
}

