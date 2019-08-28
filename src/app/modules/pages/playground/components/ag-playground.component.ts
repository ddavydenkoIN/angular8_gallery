import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from "rxjs";
import { filter, take, takeUntil } from "rxjs/operators";

import { AgGalleryListService } from "../../home/modules/gallery-list/services/ag-gallery-list.service";
import { AgGalleryStyles, AgUserInputConfig } from "../../../../models";
import { AgPlaygroundService } from "../services/ag-playground.service";
import { AgUnsubscribe } from "../../../../providers/abstract/ag-unsubscribe";


@Component({
  selector: 'ag-playground',
  templateUrl: './ag-playground.component.html',
  styleUrls: ['./ag-playground.component.less']
})
export class AgPlaygroundComponent extends AgUnsubscribe implements OnInit, AfterViewInit {

  styles$: Observable<AgGalleryStyles>;
  urls$: Observable<string[]>;
  initialNumberOfImages$: Observable<number>;
  loadCount: number;
  userInputConfig$: Observable<AgUserInputConfig>;
  imgWidth: number;

  @ViewChild('galleryContainer', null)
  galleryContainer: ElementRef;

  constructor(private galleryListService: AgGalleryListService,
              private agPlaygroundService: AgPlaygroundService,
              private route: ActivatedRoute,
              private router: Router) {
    super();
  }

  ngOnInit() {
    this.galleryListService.isNoGalleryLoaded()
      .pipe(
        take(1),
        filter(isNoGalleryLoaded => isNoGalleryLoaded)
      ).subscribe(() => this.router.navigateByUrl('/home'));

    this.agPlaygroundService.loadAllImages();

    this.initialNumberOfImages$ = this.agPlaygroundService.retrieveInitialNumberOfImages();
    this.styles$ = this.agPlaygroundService.retrieveJoinedGalleryConfig(this.route.snapshot.params['id']);

    this.urls$ = this.agPlaygroundService.retrieveAllImageUrls();
    this.userInputConfig$ = this.agPlaygroundService.retrieveGalleryConfig();

    this.agPlaygroundService.retrieveImgWidthNum()
      .pipe(takeUntil(this.destroy$))
      .subscribe((width: number) => this.imgWidth = width);
  }

  ngAfterViewInit() {
    this.loadCount = this.agPlaygroundService.calculateLoadCount(this.galleryContainer, this.imgWidth);
  }
}
