import { IProduct } from 'src/app/core/models/Product.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { first, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  endpoint = 'v1/products'
  url = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IProduct[]>(`${this.url}/${this.endpoint}`)
    .pipe(
      first(),
      tap(products => products),
    )
  }

  getById(id: string) {
    return this.http.get<IProduct>(`${this.url}/${this.endpoint}/${id}`)
    .pipe(
      first(),
      tap(product => product),
    )
  }

  createProduct(product: IProduct) {
    return this.http.post<IProduct>(`${this.url}/${this.endpoint}`, product)
    .pipe(
      first(),
      tap(product => product),
    )
  }

  updateProduct(product: IProduct) {
    return this.http.put<IProduct>(`${this.url}/${this.endpoint}`, product)
    .pipe(
      first(),
      tap(product => product),
    )
  }

  deleteProduct(id: string) {
    return this.http.delete<IProduct>(`${this.url}/${this.endpoint}/${id}`)
    .pipe(
      first(),
      tap(product => product),
    )
  }
}
