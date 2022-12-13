import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ILogin } from 'src/app/core/models/Login.model';
import { IUser } from 'src/app/core/models/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = 'users/login'
  url = environment.apiUrl

  constructor(private http: HttpClient, private router: Router) {}

  login(user: IUser): Observable<any> {
    return this.http.post<ILogin>(`${this.url}/${this.endpoint}`, user).pipe(
      tap((res) => {
        if (!res) return
        localStorage.setItem('token', JSON.stringify(res['token']))
        localStorage.setItem('user', JSON.stringify(res['user']))
        this.router.navigate([''])
      }),
    )
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  get getUserLogged(): IUser {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : null
  }

  get getIdUserLogged(): string {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!).id
      : null
  }

  get getTokenUser(): string {
    return localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token')!)
      : null
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('token')
  }
}
