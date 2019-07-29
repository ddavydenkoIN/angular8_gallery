import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, pluck, switchMap, tap } from "rxjs/operators";

import { AgTranslateService } from "../../translate/services/ag-translate.service";
import { initSearch, initSearchSuccess } from "./ag-search.actions";

@Injectable()
export class AgSearchEffects {
  constructor(private actions$: Actions,
              private translateService: AgTranslateService) {
  }

  initSearch = createEffect(() => this.actions$
    .pipe(
      ofType(initSearch),
      pluck('payload'),
      switchMap((lang: string) => this.translateService.getTranslationMap(lang)),
      pluck('HOME'),
      map((translateMap: any) => initSearchSuccess({payload: translateMap}))
    )
  );
}
