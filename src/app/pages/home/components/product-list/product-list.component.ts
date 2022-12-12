import { Component } from '@angular/core';
import { mockProducts } from 'src/app/core/models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = mockProducts
}
