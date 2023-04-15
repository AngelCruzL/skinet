import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import {
  Pagination,
  Product,
  ProductBrand,
  ProductType,
} from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  #http = inject(HttpClient);
  #baseUrl = environment.apiUrl + '/products';

  getProducts(
    productBrandId?: number,
    productTypeId?: number
  ): Observable<Pagination<Product[]>> {
    let params = new HttpParams();

    if (productBrandId)
      params = params.append('brandId', productBrandId.toString());

    if (productTypeId)
      params = params.append('typeId', productTypeId.toString());

    return this.#http.get<Pagination<Product[]>>(this.#baseUrl, { params });
  }

  getProductBrands(): Observable<ProductBrand[]> {
    return this.#http.get<ProductBrand[]>(`${this.#baseUrl}/brands`);
  }

  getProductTypes(): Observable<ProductType[]> {
    return this.#http.get<ProductType[]>(`${this.#baseUrl}/types`);
  }
}
