import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map } from "rxjs/operators";

import { loadGalleries, loadGalleriesSuccess } from "./ag-galleries.actions";
import { AgGallery } from "../../../../../../models/gallery";

@Injectable()
export class AgGalleriesEffects {
  constructor(private actions$: Actions) { }

  loadGalleries = createEffect(() => this.actions$
    .pipe(
      ofType(loadGalleries),
      map(action => {
        return loadGalleriesSuccess({
          galleries: <AgGallery[]>[
              {
                id: 1,
                name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
                propHeader: 'HOME.GALLERIES.PROPS_USED',
                propsList: [
                  {name: 'float', value: 'left'},
                  {name: 'width', value: '250px'},
                  {name: 'margin-right', value: '20px'}
                ],
                thumbnailImgName: 'thumbnail.png',
                thumbnailImgFolder: '/gallery-thumbnails'
              },
              {
                id: 2,
                name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
                propHeader: 'HOME.GALLERIES.PROPS_USED',
                propsList: [
                  {name: 'float', value: 'left'},
                  {name: 'width', value: '250px'},
                  {name: 'margin-right', value: '20px'},
                ],
                thumbnailImgName: 'thumbnail.png',
                thumbnailImgFolder: '/gallery-thumbnails'
              },
              {
                id: 3,
                name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
                propHeader: 'HOME.GALLERIES.PROPS_USED',
                propsList: [
                  {name: 'float', value: 'left'},
                  {name: 'width', value: '250px'},
                  {name: 'margin-right', value: '20px'}
                ],
                thumbnailImgName: 'thumbnail.png',
                thumbnailImgFolder: '/gallery-thumbnails'
              }
            ]
        });
      })
  ))
}
