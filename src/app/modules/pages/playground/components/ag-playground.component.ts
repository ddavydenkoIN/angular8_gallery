import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from "rxjs";

import { AgGalleryListService } from "../../home/modules/gallery-list/services/ag-gallery-list.service";
import { AgGallery } from "../../../../models";
import { filter, take, takeUntil, tap } from "rxjs/operators";

@Component({
  selector: 'ag-playground',
  templateUrl: './ag-playground.component.html',
  styleUrls: ['./ag-playground.component.less']
})
export class AgPlaygroundComponent implements OnInit {

  gallery$: Observable<AgGallery>;

  constructor(private galleryListService: AgGalleryListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.galleryListService.isNoGalleryLoaded()
      .pipe(
        take(1),
        filter(isNoGalleryLoaded => isNoGalleryLoaded)
      ).subscribe(() => this.router.navigateByUrl('/home'));

    this.gallery$ = this.galleryListService.getGalleryById(this.route.snapshot.params['id']);
  }

}
