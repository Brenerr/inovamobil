import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs/internal/observable/throwError'
import { AuthService } from './auth.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const AUTH_TOKEN = this.authService.getTokenUser
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (AUTH_TOKEN && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          token: `${AUTH_TOKEN}`,
        },
      })
      return next.handle(request).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) this.authService.logout()
          return throwError(() => new Error(error.message))
        }),
      )
    } else {
      return next.handle(request)
    }
  }
}
