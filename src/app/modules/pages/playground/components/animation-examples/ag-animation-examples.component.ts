import { Component, forwardRef, OnInit } from '@angular/core';

import { AgAnimationEnum } from "../../../../../enums";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'ag-animation-examples',
  templateUrl: './ag-animation-examples.component.html',
  styleUrls: ['./ag-animation-examples.component.less'],
  providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AgAnimationExamplesComponent),
    multi: true
  }
]
})
export class AgAnimationExamplesComponent implements OnInit, ControlValueAccessor  {

  animationList = Object.values(AgAnimationEnum);
  hoveredIndex: number;
  selectedAnimation: string;

  setAnimation(selectedKeyframe: string): void {
    this.selectedAnimation = selectedKeyframe;
    this.propagateChange(this.selectedAnimation);
  }

  constructor() { }

  ngOnInit() {
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(keyframe: string): void {
    if (keyframe) {
      this.selectedAnimation = keyframe;
    }
  }

}
