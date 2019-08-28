import { NgModule } from "@angular/core";

import { AgSafePipe } from "./pipes/safe.pipe";

const PIPES_LIST = [
  AgSafePipe
];

@NgModule({
  declarations: PIPES_LIST,
  exports: PIPES_LIST
})
export class AgPipesModule {
}
