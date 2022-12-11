import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { AvatarModule } from '../../utils/components/avatar/avatar.module';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
  ],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,
    MatToolbarModule,
    AvatarModule,
  ]
})
export class DefaultLayoutModule { }
