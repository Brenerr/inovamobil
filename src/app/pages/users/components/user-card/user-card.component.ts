import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { IUser } from 'src/app/core/models/User.model'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'
import { UserRegisterComponent } from '../user-register/user-register.component'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser
  @Output() updatedUser = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  editUser(user: IUser) {
    const dialogRef = this.dialog.open(UserRegisterComponent, {
      data: user
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.updatedUser.emit();
    })
  }
}
