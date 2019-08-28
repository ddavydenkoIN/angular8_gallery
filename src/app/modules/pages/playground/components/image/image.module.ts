import { HostBinding, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgImageComponent } from "./components/image.component";
import { AgPipesModule } from "../../../../common/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    AgPipesModule
  ],
  declarations: [AgImageComponent],
  exports: [AgImageComponent],
})
export class AgImageModule {

}


