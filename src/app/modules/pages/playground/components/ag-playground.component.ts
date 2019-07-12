import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from "rxjs";
import { filter, take, tap } from "rxjs/operators";

import { AgGalleryListService } from "../../home/modules/gallery-list/services/ag-gallery-list.service";
import { AgGallery, AgGalleryProperties } from "../../../../models";
import { AgPlaygroundService } from "../services/ag-playground.service";


@Component({
  selector: 'ag-playground',
  templateUrl: './ag-playground.component.html',
  styleUrls: ['./ag-playground.component.less']
})
export class AgPlaygroundComponent implements OnInit {

  props$: Observable<AgGalleryProperties>;
  urls$: Observable<string[]>;
  initialNumberOfImages$: Observable<number>;

  constructor(private galleryListService: AgGalleryListService,
              private agPlaygroundService: AgPlaygroundService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.galleryListService.isNoGalleryLoaded()
      .pipe(
        take(1),
        filter(isNoGalleryLoaded => isNoGalleryLoaded)
      ).subscribe(() => this.router.navigateByUrl('/home'));

    this.agPlaygroundService.loadAllImages();

    this.initialNumberOfImages$ = this.agPlaygroundService.retrieveInitialNumberOfImages();
    this.props$ = this.galleryListService.getGalleryProps(this.route.snapshot.params['id']);
    this.urls$ = this.agPlaygroundService.retrieveAllImageUrls();
  }
}
