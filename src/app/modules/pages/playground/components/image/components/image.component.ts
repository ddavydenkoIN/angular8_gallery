import { Component, Input } from '@angular/core';

import { AgOnChange } from "../../../../../../providers/decorators/utils";
import { AgGalleryListThumbnail } from "../../../../../../models/gallery";
import { AgBypassSecurityType } from "../../../../../../enums";

@Component({
  selector: 'ag-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class AgImageComponent {
  @Input()
  url: string;

  @Input()
  borderRadius?: string;

  @Input()
  boxShadow?: string;

  @Input()
  animationDuration?: string;

  @Input()
  animationKeyframe?: string;

  @Input()
  filter: string;

  securityType = AgBypassSecurityType;
}
