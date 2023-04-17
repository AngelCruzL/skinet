import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import {
  Pagination,
  Product,
  ProductBrand,
  ProductType,
  ShopParams,
} from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  #http = inject(HttpClient);
  #baseUrl = environment.apiUrl + '/products';

  getProducts(shopParams: ShopParams): Observable<Pagination<Product[]>> {
    const { brandId, typeId, sort } = shopParams;
    let params = new HttpParams();

    if (brandId > 0) params = params.append('brandId', brandId.toString());

    if (typeId) params = params.append('typeId', typeId.toString());

    if (sort) params = params.append('sort', sort);

    return this.#http.get<Pagination<Product[]>>(this.#baseUrl, { params });
  }

  getProductBrands(): Observable<ProductBrand[]> {
    return this.#http.get<ProductBrand[]>(`${this.#baseUrl}/brands`);
  }

  getProductTypes(): Observable<ProductType[]> {
    return this.#http.get<ProductType[]>(`${this.#baseUrl}/types`);
  }
}
