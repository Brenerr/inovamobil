import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUnauthenticatedGuard } from './core/guard/unauthenticated-user.guard';
import { UserAuthenticatedGuard } from './core/guard/user-authenticated.guard';
import { Role } from './core/models/Role.enum';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [UserUnauthenticatedGuard],
    data: { roles: [Role.MANAGER, Role.EMPLOYEE] },
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    canActivate: [UserAuthenticatedGuard],
    data: { roles: [Role.MANAGER, Role.EMPLOYEE] },
    loadChildren: () =>
      import('./layouts/default-layout/default-layout.module').then(
        (m) => m.DefaultLayoutModule,
      ),
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
