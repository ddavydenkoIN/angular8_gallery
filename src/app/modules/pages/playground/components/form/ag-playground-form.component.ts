import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AgPlaygroundService } from "../../services/ag-playground.service";
import { ActivatedRoute, Route } from "@angular/router";
import { map, take } from "rxjs/operators";
import { AgGalleryStyles, AgUserInputConfig } from "../../../../../models/gallery";
import { AgPlaygroundFormService } from "../../services/ag-playground-form.service";
import { AgAnimationEnum, AgUserInput } from "../../../../../enums";
import { AgImgWidthObject } from "../../../../../models/img";

@Component({
  selector: 'ag-playground-form',
  templateUrl: './ag-playground-form.component.html',
  styleUrls: ['./ag-playground-form.component.less']
})
export class AgPlaygroundFormComponent implements OnInit {

  userInputForm: FormGroup;
  backupConfig: AgGalleryStyles;
  imageWidthObj: AgImgWidthObject;
  userInputEnum = AgUserInput;

  constructor(private playgroundService: AgPlaygroundService,
              private route: ActivatedRoute,
              private playgroundFormService: AgPlaygroundFormService) { }

  ngOnInit() {
    this.playgroundService.retrieveJoinedGalleryConfig(this.route.snapshot.params['id'])
      .pipe(take(1))
      .subscribe((config: AgGalleryStyles) => {
        this.backupConfig = config;
        this.userInputForm = this.buildFormGroup(config);
        console.log(config);
      });
  }

  buildFormGroup(config: AgGalleryStyles): FormGroup {
    this.imageWidthObj = this.playgroundFormService.parseImgWidth(config.container['grid-template-columns']);
    const group = new FormGroup({
      [AgUserInput.X_INTERVAL]: new FormControl(config.container["grid-row-gap"].replace('px', '')),
      [AgUserInput.Y_INTERVAL]: new FormControl(config.container["grid-column-gap"].replace('px', '')),
      [AgUserInput.MIN_IMG_WIDTH]: new FormControl(this.imageWidthObj.value.replace('px', '')),
      [AgUserInput.ROW_HEIGHT]: new FormControl(config.container['grid-auto-rows'].replace('px', '')),
      [AgUserInput.ANIMATION_DURATION]: new FormControl(config.img['animationDuration'].replace('s', '')),
      [AgUserInput.ANIMATION_KEYFRAME]: new FormControl(config.img['animationKeyframe'])
    });
    return group;
  }

  reset(): void {
    this.userInputForm = this.buildFormGroup(this.backupConfig);
    this.submit();
  }

  submit(): void {
    this.playgroundService.updateUserInput(
      <AgUserInputConfig>this.playgroundFormService.handleUserInput(this.userInputForm.value, this.imageWidthObj)
    );
  }

}
