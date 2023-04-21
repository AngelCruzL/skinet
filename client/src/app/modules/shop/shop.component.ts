import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Product, ProductBrand, ProductType, ShopParams } from '@core/models';
import { ShopService } from '@shop/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchTerm!: ElementRef;
  products: Product[] = [];
  productBrands: ProductBrand[] = [];
  productTypes: ProductType[] = [];
  shopParams = new ShopParams();
  totalItemsCount = 0;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  #shopService = inject(ShopService);

  ngOnInit(): void {
    this.getProducts();
    this.getProductBrands();
    this.getProductTypes();
  }

  getProducts(): void {
    this.#shopService.getProducts(this.shopParams).subscribe({
      next: ({ data, pageNumber, itemsPerPage, count }) => {
        this.products = data;
        this.shopParams.pageNumber = pageNumber;
        this.shopParams.itemsPerPage = itemsPerPage;
        this.totalItemsCount = count;
      },
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
    this.shopParams.brandId = productBrandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onProductTypeSelected(productTypeId: number): void {
    this.shopParams.typeId = productTypeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: any): void {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(clickedPage: number): void {
    if (this.shopParams.pageNumber === clickedPage) return;

    this.shopParams.pageNumber = clickedPage;
    this.getProducts();
  }

  onSearch(): void {
    this.shopParams.searchParam = this.searchTerm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset(): void {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

  displaySideBar(): boolean {
    return this.productTypes.length > 0 && this.productBrands.length > 0;
  }
}
