import { Location } from '@angular/common'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { catchError, Observable, of } from 'rxjs'
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model'
import { IProduct } from 'src/app/core/models/Product.model'
import { ProductService } from 'src/app/core/services/product/product.service'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  product$!: Observable<IProduct>

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.getById()
  }

  getById() {
    const productId = this.route.snapshot.params["id"]
    this.product$ = this.productService.getById(productId).pipe(
      catchError((error) => {
        this.onError({
          title: 'Erro!',
          description: 'Erro ao carregar usuários',
          action: 'Ok',
          color: 'primary',
          onlyConfirm: true,
        })
        return of()
      }),
    )
  }

  onError(errorMsg: IDialogConfirm) {
    this.dialog.open(DialogConfirmComponent, {
      data: errorMsg,
    })
  }

  back(): void {
    this.location.back()
  }
}
