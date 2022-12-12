import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InputModule } from 'src/app/utils/components/input/input.module';
import { MatIconModule } from '@angular/material/icon';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryCardComponent } from './components/inventory-card/inventory-card.component';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryCardComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    InputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class InventoryModule { }
