import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model'
import { IProduct } from 'src/app/core/models/Product.model'
import { ProductService } from 'src/app/core/services/product/product.service'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'
import { ProductRegisterComponent } from '../product-register/product-register.component'

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss'],
})
export class InventoryCardComponent {
  @Input() product!: IProduct
  @Output() updatedProduct = new EventEmitter()

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {}

  editProduct(product: IProduct) {
    const dialogRef = this.dialog.open(ProductRegisterComponent, {
      data: product,
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.updatedProduct.emit()
    })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((res) => {
      if (!res) {
        this.onError({
          title: 'Erro!',
          description: 'Erro ao criar produto.',
          action: 'Ok',
          color: 'primary',
          onlyConfirm: true,
        })
      } else {
        this.openSnackBar('Produto criado com sucesso.', 'Ok')
        this.dialog.closeAll()
        this.updatedProduct.emit()
      }
    })
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
