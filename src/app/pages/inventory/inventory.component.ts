import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { IDialogConfirm } from 'src/app/core/models/DialogConfirm.model';
import { IProduct } from 'src/app/core/models/Product.model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

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

  createProduct() {
    const dialogRef = this.dialog.open(ProductRegisterComponent)

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
