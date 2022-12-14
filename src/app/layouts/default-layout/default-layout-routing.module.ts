import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from 'src/app/core/models/Role.enum';
import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'inventory',
        data: { roles: [Role.MANAGER, Role.EMPLOYEE] },
        loadChildren: () =>
          import('../../pages/inventory/inventory.module').then(
            (m) => m.InventoryModule,
          ),
      },
      {
        path: 'users',
        data: { roles: [Role.MANAGER] },
        loadChildren: () =>
          import('../../pages/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: ':id',
        data: { roles: [Role.MANAGER, Role.EMPLOYEE] },
        loadChildren: () =>
          import('../../pages/details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: '',
        data: { roles: [Role.MANAGER, Role.EMPLOYEE] },
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }
