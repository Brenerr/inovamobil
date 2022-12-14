import { Role } from './../models/Role.enum'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../services/auth/auth.service'

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentRole: Role = this.authService.getUserLogged?.role

    if (this.authService.isLogged) {
      if (route.data['roles'].includes(currentRole)) {
        return true
      } else {
        this.router.navigate(['/'])
        return false
      }
    }
    this.router.navigate(['login'])
    return false
  }
}
