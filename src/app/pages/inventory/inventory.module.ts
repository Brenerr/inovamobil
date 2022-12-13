import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryCardComponent } from './components/inventory-card/inventory-card.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryCardComponent,
    ProductRegisterComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
  ]
})
export class InventoryModule { }
