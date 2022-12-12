import { Component, Input } from '@angular/core';
import { UserProps } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: UserProps;
}
