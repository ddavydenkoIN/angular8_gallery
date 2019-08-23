import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Action } from "@ngrx/store";
import { map, switchMap } from "rxjs/operators";

import { loadGalleries, loadGalleriesSuccess } from "./ag-galleries.actions";
import { AgHttpService } from "../../../../../../providers/services/ag-http.service";
import { AgGallery } from "../../../../../../models";
import { AgRoutesEnum } from "../../../../../../enums";

@Injectable()
export class AgGalleriesEffects {
  constructor(private actions$: Actions,
              private httpService: AgHttpService) { }

  loadGalleries = createEffect(() => this.actions$
    .pipe(
      ofType(loadGalleries),
      switchMap((action: Action) => this.httpService.get(AgRoutesEnum.LOAD_ALL_GALLERIES, {})),
      map((galleries: AgGallery[]) => loadGalleriesSuccess({galleries}))
    )
  );
}
