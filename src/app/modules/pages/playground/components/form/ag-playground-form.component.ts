import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { take } from "rxjs/operators";

import { AgPlaygroundService } from "../../services/ag-playground.service";
import { AgGalleryStyles, AgUserInputConfig } from "../../../../../models/gallery";
import { AgPlaygroundFormService } from "../../services/ag-playground-form.service";
import { AgUserInput } from "../../../../../enums";
import { AgImgFilter, AgImgWidthObject } from "../../../../../models/img";
import { IMG_FILTERS } from "../../../../../consts";

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
  filters: AgImgFilter[] = IMG_FILTERS;

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
      [AgUserInput.ANIMATION]: new FormControl({
        duration: config.img['animation']['duration'].replace('s', ''),
        animation: config.img['animation']['animation']
      }),
      [AgUserInput.BORDER_RADIUS]: new FormControl(config.img['border-radius'].replace('px', '')),
      [AgUserInput.FILTER]: new FormControl(config.img['filter'])
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

  compareWithFunction(a: AgImgFilter, b: AgImgFilter): boolean {
    return a.value === b.value;
  }

}
