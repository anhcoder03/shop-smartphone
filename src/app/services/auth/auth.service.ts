import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignin, ISignup } from 'src/app/interface/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'http://localhost:3333/api/v1';
  constructor(private http: HttpClient) {}
  signin(user: ISignin): Observable<ISignin> {
    return this.http.post<ISignin>(`http://localhost:3333/api/v1/login`, user);
  }
  signup(user: ISignup): Observable<ISignup> {
    return this.http.post<ISignup>(
      `http://localhost:3333/api/v1/register`,
      user
    );
  }
  saveUserToSessionStorage(user: any): void {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }
  saveAccessToken(accessToken: any): void {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
  }
}
