import { Component } from '@angular/core'
import { mockProducts } from 'src/app/core/models/Product.model'

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent {
  products = mockProducts
}
