import { Component, ViewEncapsulation } from '@angular/core';

interface RangeProps {
  min: number
  max: number
}

interface OptionProps {
  range: RangeProps
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent {
  options: OptionProps[] = [
    { range: {min: 0, max: 5000}},
    { range: {min: 5000, max: 20000}},
    { range: {min: 20000, max: 50000}},
  ]
}
