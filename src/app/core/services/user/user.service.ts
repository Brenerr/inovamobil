import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { first, tap } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IUser } from '../../models/User.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint = 'users'
  url = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IUser[]>(`${this.url}/${this.endpoint}`)
    .pipe(
      first(),
      tap(users => users),
    )
  }

  createUser(user: IUser) {
    return this.http.post<IUser>(`${this.url}/${this.endpoint}`, user)
    .pipe(
      first(),
      tap(user => user),
    )
  }

  updateUser(user: IUser) {
    return this.http.put<IUser>(`${this.url}/${this.endpoint}/${user.id}`, user)
    .pipe(
      first(),
      tap(user => user),
    )
  }
}
