import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pagination, Product } from '@core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  #http = inject(HttpClient);

  ngOnInit(): void {
    this.#http
      .get<Pagination<Product[]>>(
        'https://localhost:5001/api/products?pageSize=50'
      )
      .subscribe(response => {
        this.products = response.data;
      });
  }
}
