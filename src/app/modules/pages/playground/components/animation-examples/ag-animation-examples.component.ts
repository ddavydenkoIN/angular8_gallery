import { Component, forwardRef } from '@angular/core';

import { AgAnimationEnum } from "../../../../../enums";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { AgAnimation } from "../../../../../models/gallery";

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
export class AgAnimationExamplesComponent implements ControlValueAccessor  {

  animationList = Object.values(AgAnimationEnum);
  hoveredIndex: number;
  selectedAnimation: AgAnimation;

  setAnimation(selectedKeyframe: string): void {
    this.selectedAnimation = {
      ...this.selectedAnimation,
      animation: selectedKeyframe
    };
    this.propagateChange(this.selectedAnimation);
  }

  setDuration(duration: string): void {
    this.selectedAnimation = {
      ...this.selectedAnimation,
      duration: duration
    };
    this.propagateChange(this.selectedAnimation);
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(animation: AgAnimation): void {
    if (animation) {
      this.selectedAnimation = animation;
    }
  }

}
