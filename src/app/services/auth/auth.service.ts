import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignin, ISignup, IUser } from 'src/app/interface/auth';

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
  isAuthen(): Boolean {
    const token = localStorage.getItem('accessToken');
    if (!token || token === '' || token === undefined) {
      return false;
    }
    return true;
  }
  logOut() {
    localStorage.clear();
    sessionStorage.clear();
  }
  getUserLogin() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      JSON.parse(currentUser);
    }
    return currentUser;
  }

  // ADMIN
  getAllAccount(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API_URL}/get-all-user`);
  }
  UpdateAccount(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(
      `${this.API_URL}/update-user/${user._id}`,
      user
    );
  }
  DeleteAccount(_id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/remove-user/${_id}`);
  }
  getOneAccount(_id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/getUser/${_id}`);
  }
}
