import { Component, HostBinding, HostListener } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  bgNav:boolean = false;
  isManager: boolean = false;

  constructor(
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    this.isManager = this.authService.getUserLogged?.role === 'manager';
  }

  @HostListener('window:scroll') onScroll() {
    this.bgNav = window.scrollY >= 50;
  }

  logout() {
    this.authService.logout();
  }

}
