import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'inventory',
        loadChildren: () =>
          import('../../pages/inventory/inventory.module').then(
            (m) => m.InventoryModule,
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../pages/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../../pages/details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: '',
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
