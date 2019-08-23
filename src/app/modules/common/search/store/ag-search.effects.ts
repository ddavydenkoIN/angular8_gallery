import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { filter, map, pluck, switchMap, tap, withLatestFrom } from "rxjs/operators";

import { AgTranslateService } from "../../translate/services/ag-translate.service";
import { initSearch, initSearchSuccess, updateSearchValue, updateSearchValueSuccess } from "./ag-search.actions";
import { AgSearchService } from "../services/ag-search.service";
import { AgObject } from "../../../../models/common";
import { updateCurrentTab } from "../../../pages/home/store/ag-home.actions";

@Injectable()
export class AgSearchEffects {

  constructor(
    private actions$: Actions,
    private translateService: AgTranslateService,
    private searchService: AgSearchService
  ) {}

  initSearch = createEffect(() =>
    this.actions$.pipe(
      ofType(initSearch),
      pluck('payload'),
      switchMap((lang: string) => this.translateService.getTranslationMap(lang)),
      pluck('HOME'),
      map((translateMap: any) => initSearchSuccess({payload: translateMap}))
    )
  );

  updateSearchValue = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSearchValue),
      pluck('payload'),
      filter((searchValue: string) => !!searchValue),
      withLatestFrom(this.searchService.getSearchMap()),
      switchMap(([searchValue, searchMap]: [string, AgObject]) => [
        updateCurrentTab({tabName: this.searchService.getTabToRedirect(searchValue, searchMap)}),
        updateSearchValueSuccess({payload: searchValue})
      ])
    ));
}
