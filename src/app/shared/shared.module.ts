import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarComponent } from './components/avatar/avatar.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { InputComponent } from './components/input/input.component';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [
    AvatarComponent,
    DialogConfirmComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    AvatarComponent,
    DialogConfirmComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
})
export class SharedModule { }
