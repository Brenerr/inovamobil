import { IProduct } from './../../../../core/models/Product.model';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/core/services/product/product.service';
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent {

  isEdit = false

  formProduct: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
  })

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
  ) {
    if (this.data?.id) {
      this.fillForm()
      this.isEdit = true
    }
  }

  fillForm() {
    this.formProduct.patchValue(this.data)
  }

  saveProduct() {
    if (this.formProduct.invalid) return
    var product = this.formProduct.getRawValue() as IProduct
    if(this.isEdit) {
      product.id = this.data.id
      product.imageBase64 = this.data.imageBase64
      this.productService.updateProduct(product).subscribe((res) => {
        if (!res) {
          this.onError({
            title: 'Erro!',
            description: 'Erro ao atualizar produto.',
            action: 'Ok',
            color: 'primary',
            onlyConfirm: true,
          })
        } else {
          this.openSnackBar('Produto atualizado com sucesso.', 'Ok')
          this.dialog.closeAll()
        }
      })
    } else {
      this.productService.createProduct(product).subscribe((res) => {
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
