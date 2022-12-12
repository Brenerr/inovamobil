import { Component, Input } from '@angular/core';
import { ProductProps } from 'src/app/core/models/Product.model';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss']
})
export class InventoryCardComponent {
  @Input() product!: ProductProps;
}
