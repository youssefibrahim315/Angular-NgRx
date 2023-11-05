import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/core/store/user/user-store.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forRoot({user: reducer}),
    HttpClientModule,
    RouterModule
  ],
  exports:[UserSearchComponent]
})
export class UserModule { }
