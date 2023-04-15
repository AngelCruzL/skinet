import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getProducts(): Observable<Pagination<Product[]>> {
    return this.#http.get<Pagination<Product[]>>(
      `${this.#baseUrl}?pageSize=50`
    );
  }

  getProductBrands(): Observable<ProductBrand[]> {
    return this.#http.get<ProductBrand[]>(`${this.#baseUrl}/brands`);
  }

  getProductTypes(): Observable<ProductType[]> {
    return this.#http.get<ProductType[]>(`${this.#baseUrl}/types`);
  }
}
