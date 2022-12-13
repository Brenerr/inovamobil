import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserUnauthenticatedGuard implements CanActivate{
    constructor(
      private authService: AuthService,
      private router: Router) { }
    canActivate(){
      if (this.authService.isLogged) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}
