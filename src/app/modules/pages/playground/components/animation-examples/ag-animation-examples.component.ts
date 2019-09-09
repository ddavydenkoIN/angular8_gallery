import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgAnimationEnum } from "../../../../../enums";

@Component({
  selector: 'ag-animation-examples',
  templateUrl: './ag-animation-examples.component.html',
  styleUrls: ['./ag-animation-examples.component.less']
})
export class AgAnimationExamplesComponent implements OnInit {

  @Input()
  formControlName: string;

  @Output()
  onAnimationSelected = new EventEmitter();

  animationList = Object.values(AgAnimationEnum);

  setAnimation(selected: string): void {
    this.onAnimationSelected.emit(selected);
  }

  constructor() { }

  ngOnInit() {
  }

}
