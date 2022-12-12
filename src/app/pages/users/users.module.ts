import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputModule } from 'src/app/utils/components/input/input.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AvatarModule } from 'src/app/utils/components/avatar/avatar.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    InputModule,
    MatButtonModule,
    MatIconModule,
    AvatarModule,
  ]
})
export class UsersModule { }
