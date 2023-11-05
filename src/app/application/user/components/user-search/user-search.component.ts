import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserSearchError, selectUserSearchLoading, selectUserSearchResults } from 'src/app/core/store/user/user-store.selectors';
import * as UserActions from '../../../../core/store/user/user-store.actions';
import { IUser } from '../../interface';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  users: Observable<IUser[]> = this.store.pipe(select(selectUserSearchResults));
  loading: Observable<boolean> = this.store.pipe(select(selectUserSearchLoading));
  error: Observable<any> = this.store.pipe(select(selectUserSearchError));
  userName = '';

  constructor(private store: Store) {
    this.users = this.store.select(selectUserSearchResults);
    this.loading = this.store.select(selectUserSearchLoading);
    this.error = this.store.select(selectUserSearchError);
  }
  onSearch(userName: string) {
    console.log("🚀 ~ file: user-search.component.ts:26 ~ UserSearchComponent ~ onSearch ~ query:", userName)
    this.userName = userName;
    if (userName.length > 2) {
      this.store.dispatch(UserActions.searchUsers({ userName }));
    }
  }

}
