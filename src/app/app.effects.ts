import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  countActionsType,
  CountUpdatedAtAction,
} from './reducers/count/count.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  updatedAt$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        countActionsType.increase,
        countActionsType.decrease,
        countActionsType.clear
      ),
      map(() => {
        return new CountUpdatedAtAction({
          updatedAt: Date.now()
        });
      })
    );
  });
}
