import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserAuthenticatedGuard implements CanActivate{
    constructor(
      private authService: AuthService,
      private router: Router) { }
    canActivate(){
      if (this.authService.isLogged) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
}
