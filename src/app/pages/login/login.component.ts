import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/core/models/User.model'
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {}

  login() {
    if (this.formLogin.invalid) return
    var user = this.formLogin.getRawValue() as IUser
    this.authService.login(user).subscribe((res) => {
      if (!res) {
        this.snackBar.open(
          'Falha na autenticação',
          'Usuário ou senha incorretos.',
          {
            duration: 3000,
          },
        )
      }
    })
  }
}
