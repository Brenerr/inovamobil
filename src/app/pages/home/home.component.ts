import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable, catchError, of } from 'rxjs'
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model'
import { IProduct } from 'src/app/core/models/Product.model'
import { ProductService } from 'src/app/core/services/product/product.service'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'
import { FiltersComponent } from './components/filters/filters.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  products$!: Observable<IProduct[]>

  constructor(private productService: ProductService, public dialog: MatDialog) {
    this.getAll()
  }

  getAll() {
    this.products$ = this.productService.getAll().pipe(
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

  onError(errorMsg: IDialogConfirm) {
    this.dialog.open(DialogConfirmComponent, {
      data: errorMsg,
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(FiltersComponent)

    dialogRef.afterClosed().subscribe((result) => {
    })
  }
}
