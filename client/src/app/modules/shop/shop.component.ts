import { Component, inject, OnInit } from '@angular/core';

import { Product } from '@shared/models';
import { ShopService } from '@shop/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  #shopService = inject(ShopService);

  ngOnInit(): void {
    this.#shopService.getProducts().subscribe({
      next: response => (this.products = response.data),
      error: error => console.log(error),
    });
  }
}
