import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs/operators";

import { AgHttpService } from "../../../../providers/services/ag-http.service";
import { loadAllImages, loadAllImagesSuccess } from "./ag-playground.actions";
import { AgRoutesEnum } from "../../../../enums";
import { AgImagesObject } from "../../../../models";

@Injectable()
export class AgPlaygroundEffects {
  constructor(private actions$: Actions,
              private httpService: AgHttpService) { }

  loadImages = createEffect(() => this.actions$
    .pipe(
      ofType(loadAllImages),
      switchMap(action => this.httpService.get(AgRoutesEnum.LOAD_ALL_IMAGES, {})),
      map((images: AgImagesObject) => loadAllImagesSuccess({images}))
    )
  );
}
