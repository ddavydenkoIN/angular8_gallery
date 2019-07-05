import { of, Observable } from "rxjs";
import { catchError, switchMap, filter } from "rxjs/operators";
import { Action } from '@ngrx/store';

export const errorHandler = (name: string, actions?: Action[], defaultValue = null) =>
  <T>(source: Observable<T>) =>
    source
      .pipe(
        catchError((error) => {
          console.error(`Error in: ${name}`, error);

          return !actions ? of(defaultValue) : of(defaultValue)
            .pipe(
              switchMap(() => {
                console.warn(`Actions: ${JSON.stringify(actions)} were called!`);

                return actions;
              }),
            );
        }),
        filter(src => !!src)
      );
