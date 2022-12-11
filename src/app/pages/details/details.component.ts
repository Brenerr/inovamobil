import { Location } from '@angular/common';
import { Component } from '@angular/core';

interface ProductProps {
  id: string
  title: string
  description: string
  price: number
  picture: string
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(private location: Location) {}

  product: ProductProps = {
    id: '1',
    title: 'Nike Air Max',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 29990,
    picture: '/assets/product.svg'
  }

  back(): void {
    this.location.back();
  }
}
