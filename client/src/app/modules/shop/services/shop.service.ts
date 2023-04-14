import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Pagination, Product } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  #http = inject(HttpClient);
  #baseUrl = environment.apiUrl;

  getProducts(): Observable<Pagination<Product[]>> {
    return this.#http.get<Pagination<Product[]>>(
      `${this.#baseUrl}/products?pageSize=50`
    );
  }
}
