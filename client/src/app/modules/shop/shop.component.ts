import { Component, inject, OnInit } from '@angular/core';

import { Product, ProductBrand, ProductType } from '@core/models';
import { ShopService } from '@shop/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  productBrands: ProductBrand[] = [];
  productTypes: ProductType[] = [];
  productBrandIdSelected = 0;
  productTypeIdSelected = 0;

  #shopService = inject(ShopService);

  ngOnInit(): void {
    this.getProducts();
    this.getProductBrands();
    this.getProductTypes();
  }

  getProducts(): void {
    this.#shopService
      .getProducts(this.productBrandIdSelected, this.productTypeIdSelected)
      .subscribe({
        next: response => (this.products = response.data),
        error: error => console.log(error),
      });
  }

  getProductBrands(): void {
    this.#shopService.getProductBrands().subscribe({
      next: response =>
        (this.productBrands = [{ id: 0, name: 'All' }, ...response]),
      error: error => console.log(error),
    });
  }

  getProductTypes(): void {
    this.#shopService.getProductTypes().subscribe({
      next: response =>
        (this.productTypes = [{ id: 0, name: 'All' }, ...response]),
      error: error => console.log(error),
    });
  }

  onProductBrandSelected(productBrandId: number): void {
    this.productBrandIdSelected = productBrandId;
    this.getProducts();
  }

  onProductTypeSelected(productTypeId: number): void {
    this.productTypeIdSelected = productTypeId;
    this.getProducts();
  }
}
