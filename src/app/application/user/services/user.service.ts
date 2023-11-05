import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // Search GitHub users based on the query
  searchUsers(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/users?q=${query}`;
    return this.http.get(url);
  }
}
