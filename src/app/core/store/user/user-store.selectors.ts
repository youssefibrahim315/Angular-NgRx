import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user-store.reducer';

const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserSearchResults = createSelector(selectUserState, (state) => state.users);
export const selectUserSearchLoading = createSelector(selectUserState, (state) => state.loading);
export const selectUserSearchError = createSelector(selectUserState, (state) => state.error);
