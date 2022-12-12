import { Component, Input } from '@angular/core';
import { ProductProps } from 'src/app/core/models/Product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: ProductProps | undefined;
}
