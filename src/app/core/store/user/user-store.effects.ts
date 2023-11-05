import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user-store.actions';
import { UserService } from 'src/app/application/user/services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  searchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.searchUsers),
      mergeMap((action) =>
        this.userService.searchUsers(action.userName).pipe(
          map((users) => UserActions.searchUsersSuccess({ users })),
          catchError((error) => of(UserActions.searchUsersFailure({ error })))
        )
      )
    )
  );
}
