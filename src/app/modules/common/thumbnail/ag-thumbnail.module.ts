import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgThumbnailComponent } from "./components/ag-thumbnail.component";

@NgModule({
  imports:        [CommonModule],
  declarations:   [AgThumbnailComponent],
  exports:        [AgThumbnailComponent]
})
export class AgThumbnailModule { }
