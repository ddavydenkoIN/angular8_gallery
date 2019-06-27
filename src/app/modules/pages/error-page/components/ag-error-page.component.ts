import { Component } from '@angular/core';

@Component({
  selector: 'ag-error-page',
  template: `
      <img src="../../../../../assets/img/not-found/not-found-panda.png" class="notFoundPic">
      <span class="errorMessage">Sorry. Page does not exist.</span>
  `,
  styleUrls: ['./ag-error-page.component.less']
})
export class AgErrorPageComponent {}

