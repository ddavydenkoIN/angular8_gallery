import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

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
  id: any;

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

  @Output()
  onImgClick = new EventEmitter();


  securityType = AgBypassSecurityType;

  expandImg() {
    this.onImgClick.emit({
      id: this.id,
      url: this.url
    });
  }
}
