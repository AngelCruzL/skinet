import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

import { ShopService } from '@shop/services/shop.service';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  #shopService = inject(ShopService);
  #activatedRoute = inject(ActivatedRoute);
  #breadcrumbService = inject(BreadcrumbService);

  ngOnInit(): void {
    this.loadProduct();
    this.#breadcrumbService.set('@productDetail', ' ');
  }

  loadProduct(): void {
    const id = this.#activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.#shopService.getProductById(+id).subscribe({
      next: product => {
        this.product = product;
        this.#breadcrumbService.set('@productDetail', product.name);
      },
      error: error => console.log(error),
    });
  }
}
