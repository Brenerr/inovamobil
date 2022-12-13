import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable, catchError, of } from 'rxjs'
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model'
import { IUser } from 'src/app/core/models/User.model'
import { UserService } from 'src/app/core/services/user/user.service'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'
import { UserRegisterComponent } from './components/user-register/user-register.component'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$!: Observable<IUser[]>

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.getAll()
  }

  getAll() {
    this.users$ = this.userService.getAll().pipe(
      catchError((error) => {
        this.onError({
          title: 'Erro!',
          description: 'Erro ao carregar usuários',
          action: 'Ok',
          color: 'primary',
          onlyConfirm: true,
        })
        return of([])
      }),
    )
  }

  createUser() {
    const dialogRef = this.dialog.open(UserRegisterComponent)

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll()
    })
  }

  onError(errorMsg: IDialogConfirm) {
    this.dialog.open(DialogConfirmComponent, {
      data: errorMsg,
    })
  }
}
