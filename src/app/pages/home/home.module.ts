import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FiltersComponent } from './components/filters/filters.component';
import { InputModule } from '../../utils/components/input/input.module';
import { ProductCardModule } from '../../utils/components/product-card/product-card.module';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    InputModule,
    ProductCardModule,
  ]
})
export class HomeModule { }
