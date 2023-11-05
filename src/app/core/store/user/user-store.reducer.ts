import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user-store.actions';

export interface UserState {
  users: any[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = createReducer(
  initialState,
  on(UserActions.searchUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.searchUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),
  on(UserActions.searchUsersFailure, (state, { error }) => ({
    ...state,
    users: [],
    loading: false,
    error,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
