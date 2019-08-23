import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import { AgHttpService } from "../../../../providers/services/ag-http.service";
import { loadAllImages, loadAllImagesSuccess } from "./ag-playground.actions";
import { AgRoutesEnum } from "../../../../enums";
import { AgImages } from "../../../../models/interface-class";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class AgPlaygroundEffects {
  constructor(private actions$: Actions,
              private httpService: AgHttpService) { }

  loadImages = createEffect(() => this.actions$
    .pipe(
      ofType(loadAllImages),
      switchMap((action: Action): Observable<AgImages> => this.httpService.get(AgRoutesEnum.LOAD_ALL_IMAGES, {}, AgImages)),
      map((images: AgImages) => loadAllImagesSuccess({images}))
    )
  );
}
