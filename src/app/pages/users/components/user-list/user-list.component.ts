import { Component } from '@angular/core';
import { mockUsers } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users = mockUsers
}
