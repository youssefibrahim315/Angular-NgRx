import { createAction, props } from '@ngrx/store';

export const searchUsers = createAction('[User Search] Search Users', props<{ userName: string }>());
export const searchUsersSuccess = createAction('[User Search] Search Users Success', props<{ users: any[] }>());
export const searchUsersFailure = createAction('[User Search] Search Users Failure', props<{ error: any }>());
