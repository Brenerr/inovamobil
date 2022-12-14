import { IProduct } from './../../../../core/models/Product.model'
import { ChangeDetectorRef, Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ProductService } from 'src/app/core/services/product/product.service'
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model'
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component'

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent {

  isEdit = false
  fileName = ''

  formProduct: FormGroup = this.formBuilder.group({
    imageBase64: ['', [Validators.required]],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
  })

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
  ) {
    if (this.data?.id) {
      this.isEdit = true
      this.fillForm()
    }
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
    if(this.isEdit) {
      this.showPreview()
    }
  }

  fillForm() {
    this.formProduct.patchValue(this.data);
  }

  saveProduct() {
    if (this.formProduct.invalid) return
    var product = this.formProduct.getRawValue() as IProduct
    if (this.isEdit) {
      product.id = this.data.id
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

  showPreview() {
    const imgPreview = document.getElementById('imgPreview') as HTMLImageElement
    imgPreview.src = this.formProduct.controls["imageBase64"].value;
  }

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const base64: any = await this.convertBase64(file);
    this.fileName = file.name;
    this.formProduct.controls["imageBase64"].setValue(base64);
    this.showPreview();
  }

  convertBase64(file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
}
