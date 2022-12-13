import { IUser } from './../../../../core/models/User.model'
import { Component, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UserService } from 'src/app/core/services/user/user.service'
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  hide = true
  isEdit = false

  formUser: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: IUser,
  ) {
    if (this.data?.id) {
      this.fillForm()
      this.isEdit = true
    }
  }

  fillForm() {
    this.formUser.patchValue(this.data)
  }

  saveUser() {
    if (this.formUser.invalid) return
    var user = this.formUser.getRawValue() as IUser
    if(this.isEdit) {
      user.id = this.data.id
      user.role = this.data.role
      this.userService.updateUser(user).subscribe((res) => {
        if (!res) {
          this.onError({
            title: 'Erro!',
            description: 'Erro ao atualizar usuário.',
            action: 'Ok',
            color: 'primary',
            onlyConfirm: true,
          })
        } else {
          this.openSnackBar('Usuário atualizado com sucesso.', 'Ok')
          this.dialog.closeAll()
        }
      })
    } else {
      this.userService.createUser(user).subscribe((res) => {
        if (!res) {
          this.onError({
            title: 'Erro!',
            description: 'Erro ao criar usuário.',
            action: 'Ok',
            color: 'primary',
            onlyConfirm: true,
          })
        } else {
          this.openSnackBar('Usuário criado com sucesso.', 'Ok')
          this.dialog.closeAll()
        }
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2000,
    })
  }

  onError(message: IDialogConfirm) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: message,
    })
  }
}
