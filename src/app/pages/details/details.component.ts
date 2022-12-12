import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { mockProducts } from 'src/app/core/models/Product.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(private location: Location) {}

  product= mockProducts[1]

  back(): void {
    this.location.back();
  }
}
